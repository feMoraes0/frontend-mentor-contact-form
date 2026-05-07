import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import InputMolecule from "../../src/molecules/InputMolecule.vue";

describe("Given the Input Molecule component", () => {
  it("When label and input name are passed, then should validate label and input properties", () => {
    render(InputMolecule, {
      props: {
        label: "any_label",
        inputName: "any-input-name",
      },
    });
    const label = screen.getByText(/any_label/i);
    const input = screen.getByRole("textbox");
    expect(label).toBeDefined();
    expect(input).toHaveProperty("id", "any-input-name-input");
    expect(input).toHaveProperty("name", "any-input-name-input");
    expect(input).toHaveProperty("type", "text");
  });

  it("When type is passed as email, then should validate label and input properties", () => {
    render(InputMolecule, {
      props: {
        label: "any_label",
        inputName: "any-input-name",
        type: "email",
      },
    });
    const label = screen.getByText(/any_label/i);
    const input = screen.getByRole("textbox");
    expect(label).toBeDefined();
    expect(input).toHaveProperty("id", "any-input-name-input");
    expect(input).toHaveProperty("name", "any-input-name-input");
    expect(input).toHaveProperty("type", "email");
  });

  it("When error message is passed, then should validate error message component", () => {
    render(InputMolecule, {
      props: {
        label: "any_label",
        inputName: "any-input-name",
        errorMessage: "any_error_message",
      },
    });
    const errorMessageComponent = screen.queryByText(/any_error_message/i);
    expect(errorMessageComponent).not.toBeNull();
  });

  it("When an entry is typed, then should emit input event with the inputted string", async () => {
    const updateValueSpy = vi.fn();
    const entry = "any_entry";
    render(InputMolecule, {
      props: {
        label: "any_label",
        inputName: "any-input-name",
        modelValue: "any",
        "onUpdate:modelValue": updateValueSpy,
      },
    });
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await fireEvent.update(input, entry);
    expect(updateValueSpy).toHaveBeenCalledTimes(1);
    expect(updateValueSpy).toHaveBeenCalledWith(entry);
  });
});
