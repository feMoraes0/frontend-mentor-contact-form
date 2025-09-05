import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import TitleAtom from "../../src/atoms/TitleAtom.vue";

describe("Given the Title Atom component", () => {
  it("Then should validate text content as slot value", () => {
    render(TitleAtom, {
      slots: {
        default: "any_text_value",
      },
    });
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toBe("any_text_value");
  });
});
