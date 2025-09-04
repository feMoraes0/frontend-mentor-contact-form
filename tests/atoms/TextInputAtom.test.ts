import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import TextInputAtom from "../../src/atoms/TextInputAtom.vue";

describe("Given the Text Input Atom component", () => {
  it("When only required props are passed, then should have defined properties following props and default values", () => {
    render(TextInputAtom, {
      props: { name: "any_name" },
    });
    const input = screen.getByRole("textbox");
    expect(input).toHaveProperty("name", "any_name");
    expect(input).toHaveProperty("type", "text");
    expect(input).toHaveProperty("required", false);
    expect(input).toHaveProperty("id", "");
    const errorMessage = screen.queryByRole("error-message");
    expect(errorMessage).toBeNull();
  });

  it("When all props are passed, then should have defined properties following props", () => {
    render(TextInputAtom, {
      props: {
        id: "any_id",
        name: "any_name",
        type: "email",
        required: true,
        hasError: true,
        errorMessage: "any_error_message",
      },
    });
    const input = screen.getByRole("textbox");
    expect(input).toHaveProperty("name", "any_name");
    expect(input).toHaveProperty("type", "email");
    expect(input).toHaveProperty("required", true);
    expect(input).toHaveProperty("id", "any_id");
    const errorMessage = screen.getByRole("error-message");
    expect(errorMessage.textContent).toBe("any_error_message");
  });

  it("When a text is typed, then should emit onChange with typed input as parameter", async () => {
    const { emitted } = render(TextInputAtom, {
      props: { name: "any_name" },
    });
    const entry_value = "any_input_value";
    const input = screen.getByRole("textbox");
    await fireEvent.change(input, { target: { value: entry_value } });
    expect(emitted()).toHaveProperty("onChange", [[entry_value]]);
  });
});
