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
  });

  it("When props is passed as true, then should find error message", () => {
    render(EmailFieldMolecule, {
      props: { hasError: true },
    });
    const errorMessage = screen.queryByText(
      /please enter a valid email address/i,
    );
    expect(errorMessage).not.toBeNull();
  });

  it("When an empty email is typed, then should emit change event with an empty string", async () => {
    const entry = "";
    const { emitted } = render(EmailFieldMolecule);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await fireEvent.update(input, entry);
    expect(emitted().input).toEqual([[entry]]);
  });

  it("When an entry is typed, then should emit change event with the inputted string", async () => {
    const entry = "any_entry";
    const { emitted } = render(EmailFieldMolecule);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await fireEvent.update(input, entry);
    expect(emitted().input).toEqual([[entry]]);
  });
});
