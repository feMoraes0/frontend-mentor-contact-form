import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import CheckboxAtom from "../../src/atoms/CheckboxAtom.vue";

describe("Given the Checkbox Atom component", () => {
  it("When only required props are passed, then should validate properties and labels", () => {
    render(CheckboxAtom, {
      props: {
        label: "any_label",
      },
    });
    const input = screen.getByRole("checkbox");
    expect(input).toBeDefined();
    expect(input).not.toHaveClass("input-box__selector--active");
    const label = screen.getByText("any_label");
    expect(label).toBeDefined();
  });

  it("When check is true, then should validate properties and labels", () => {
    render(CheckboxAtom, {
      props: {
        label: "any_label",
        checked: true,
      },
    });
    const box = screen.getByRole("input-box");
    expect(box).toHaveClass("input-box--active");
    const input = screen.getByRole("checkbox");
    expect(input).toHaveClass("input-box__selector--active");
    const label = screen.getByText("any_label");
    expect(label).toBeDefined();
  });

  it("When the box is clicked, then should emit click event", async () => {
    const { emitted } = render(CheckboxAtom, {
      props: {
        label: "any_label",
      },
    });
    const box = screen.getByRole("input-box");
    expect(emitted().click).not.toBeDefined();
    await fireEvent.click(box);
    expect(emitted().click).toEqual([[]]);
  });

  it("When the input is clicked, then should emit click event", async () => {
    const { emitted } = render(CheckboxAtom, {
      props: {
        label: "any_label",
      },
    });
    const input = screen.getByRole("checkbox");
    expect(emitted().click).not.toBeDefined();
    await fireEvent.click(input);
    expect(emitted().click).toEqual([[]]);
  });

  it("When the label is clicked, then should emit click event", async () => {
    const { emitted } = render(CheckboxAtom, {
      props: {
        label: "any_label",
      },
    });
    const label = screen.getByText("any_label");
    const input = screen.getByRole("checkbox");
    expect(emitted().click).not.toBeDefined();
    await fireEvent.click(label);
    expect(emitted().click).toEqual([[]]);
  });
});
