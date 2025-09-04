import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import LabelAtom from "../../src/atoms/LabelAtom.vue";

describe("Given the Label Atom component", () => {
  it("Then should validate content as props value", () => {
    render(LabelAtom, {
      props: { for: "any_for" },
      slots: { default: "any_slot" },
    });
    const label = screen.getByText("any_slot");
    expect(label).toBeDefined();
  });
});
