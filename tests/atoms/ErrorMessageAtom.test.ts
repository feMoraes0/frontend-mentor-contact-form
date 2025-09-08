import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import ErrorMessageAtom from "../../src/atoms/ErrorMessageAtom.vue";

describe("Given the Error Message Atom component", () => {
  it("Then should validate slot as paragraph text content", () => {
    render(ErrorMessageAtom, {
      slots: {
        default: "any_component_slot",
      },
    });
    const paragraph = screen.getByText("any_component_slot");
    expect(paragraph).toBeDefined();
  });
});
