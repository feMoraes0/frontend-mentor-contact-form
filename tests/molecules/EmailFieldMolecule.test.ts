import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import EmailFieldMolecule from "../../src/molecules/EmailFieldMolecule.vue";

describe("Given the Email Field Molecule component", () => {
  it("Then should validate label and input properties", () => {
    render(EmailFieldMolecule);
    const label = screen.getByText(/email address/i);
    const input = screen.getByRole("textbox");
    const errorMessage = screen.queryByText(
      /please enter a valid email address/i,
    );
    expect(label).toBeDefined();
    expect(errorMessage).toBeNull();
    expect(input).toHaveProperty("id", "email-input");
    expect(input).toHaveProperty("name", "email-input");
    expect(input).toHaveProperty("type", "email");
    expect(input).toHaveProperty("required", true);
  });

  it("When an empty email is typed, then should not emit onInput and show error message", async () => {
    const { emitted } = render(EmailFieldMolecule);
    const input = screen.getByRole("textbox");
    await fireEvent.change(input, { target: { value: "" } });
    expect(emitted().onInput).toBeUndefined();
    const errorMessage = screen.getByRole("error-message");
    expect(errorMessage.textContent).toBe("Please enter a valid email address");
  });

  it("When an invalid email is typed, then should not emit onInput and show error message", async () => {
    const { emitted } = render(EmailFieldMolecule);
    const input = screen.getByRole("textbox");
    await fireEvent.change(input, { target: { value: "any_invalid_email" } });
    expect(emitted().onInput).toBeUndefined();
    const errorMessage = screen.getByRole("error-message");
    expect(errorMessage.textContent).toBe("Please enter a valid email address");
  });

  it("When a valid email is typed, then should emit onInput and not show error message", async () => {
    const { emitted } = render(EmailFieldMolecule);
    const input = screen.getByRole("textbox");
    await fireEvent.change(input, {
      target: { value: "any_invalid_email@email.com" },
    });
    expect(emitted().onInput).toEqual([["any_invalid_email@email.com"]]);
    const errorMessage = screen.queryByRole("error-message");
    expect(errorMessage).toBeNull();
  });
});
