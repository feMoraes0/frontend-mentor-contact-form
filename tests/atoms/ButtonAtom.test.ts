import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ButtonAtom from "../../src/atoms/ButtonAtom.vue";

describe("Given the Button Atom component", () => {
  beforeEach(() => vi.clearAllMocks());

  it("When is mounted with default prop values, Then should validate slot and default prop values usage", () => {
    render(ButtonAtom, {
      slots: {
        default: "any_text",
      },
    });
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("any_text");
    expect(button).toHaveProperty("type", "button");
  });

  it("When is mounted passing all prop values, Then should validate slot and default prop values usage", () => {
    render(ButtonAtom, {
      props: {
        type: "submit",
      },
      slots: {
        default: "any_text",
      },
    });
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("any_text");
    expect(button).toHaveProperty("type", "submit");
  });

  it("When is clicked, Then should call the passed function once", async () => {
    const { emitted } = render(ButtonAtom, {
      slots: {
        default: "any_text",
      },
    });
    const button = screen.getByRole("button");
    expect(emitted()).not.toHaveProperty("onClick");
    await fireEvent.click(button);
    expect(emitted()).toHaveProperty("onClick");
  });
});
