import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import FirstNameFieldMolecule from "../../src/molecules/FirstNameFieldMolecule.vue";

describe("Given the First Name Field Molecule component", () => {
  it("Then should validate label and input properties", () => {
    render(FirstNameFieldMolecule);
    const label = screen.getByText(/first name/i);
    const input = screen.getByRole("textbox");
    const errorMessage = screen.queryByText(/This field is required/i);
    expect(label).toBeDefined();
    expect(errorMessage).toBeNull();
    expect(input).toHaveProperty("id", "first-name-input");
    expect(input).toHaveProperty("name", "first-name-input");
    expect(input).toHaveProperty("type", "text");
  });

  it("When props is passed as true, then should find error message", () => {
    render(FirstNameFieldMolecule, {
      props: { hasError: true },
    });
    const errorMessage = screen.queryByText(/This field is required/i);
    expect(errorMessage).not.toBeNull();
  });

  it("When an entry is typed, then should emit input event with the inputted string", async () => {
    const entry = "any_entry";
    const { emitted } = render(FirstNameFieldMolecule);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await fireEvent.update(input, entry);
    expect(emitted().input).toEqual([[entry]]);
  });
});
