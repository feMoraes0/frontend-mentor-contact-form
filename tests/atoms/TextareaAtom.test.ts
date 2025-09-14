import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import TextareaAtom from "../../src/atoms/TextareaAtom.vue";

describe("Given the Textarea Atom component", () => {
  it("When only required props are passed, then should validate properties", () => {
    render(TextareaAtom, {
      props: {
        id: "any_id",
        name: "any_name",
      },
    });
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveProperty("id", "any_id");
    expect(textarea).toHaveProperty("name", "any_name");
  });

  it("When allprops are passed, then should validate properties", () => {
    render(TextareaAtom, {
      props: {
        id: "any_id",
        name: "any_name",
      },
    });
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveProperty("id", "any_id");
    expect(textarea).toHaveProperty("name", "any_name");
  });

  it("When value is inputted, then should emit input event with input value", async () => {
    const entry = "any_value";
    const { emitted } = render(TextareaAtom, {
      props: {
        id: "any_id",
        name: "any_name",
      },
    });
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(emitted()).not.toHaveProperty("input");
    await fireEvent.update(textarea, entry);
    expect(emitted()).toHaveProperty("input", [[entry]]);
  });
});
