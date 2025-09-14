import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import MessageFieldMolecule from "../../src/molecules/MessageFieldMolecule.vue";

describe("Given the Message Field Molecule component", () => {
  it("Then should validate initial state", () => {
    render(MessageFieldMolecule);
    const label = screen.getByText(/message/i);
    const textarea = screen.getByRole("textbox");
    const errorMessage = screen.queryByText(/this field is required/i);
    expect(label).toBeDefined();
    expect(textarea).toHaveProperty("id", "message-input");
    expect(textarea).toHaveProperty("name", "message-input");
  });

  it("When hasError is true, then should find error message", () => {
    render(MessageFieldMolecule, { props: { hasError: true } });
    const errorMessage = screen.queryByText(/this field is required/i);
    expect(errorMessage).not.toBeNull();
  });

  it("When input is updated, then should emit input event with inputted value", async () => {
    const entry = "any_value";
    const { emitted } = render(MessageFieldMolecule);
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    await fireEvent.update(textarea, entry);
    expect(emitted().input).toEqual([[entry]]);
  });
});
