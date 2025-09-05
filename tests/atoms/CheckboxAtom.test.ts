import { fireEvent, logRoles, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import CheckboxAtom from "../../src/atoms/CheckboxAtom.vue";

describe("Given the Checkbox Atom component", () => {
  it("When only required props are passed, then should validate properties and labels", () => {
    render(CheckboxAtom, {
      props: {
        id: "any_id",
        name: "any_name",
        label: "any_label",
      },
    });
    const input = screen.getByRole("checkbox");
    expect(input).toHaveProperty("id", "any_id");
    expect(input).toHaveProperty("name", "any_name");
    expect(input).toHaveProperty("checked", false);
    expect(input).toHaveProperty("required", false);
    expect(input).toHaveProperty("type", "checkbox");
    const label = screen.getByText("any_label");
    expect(label).toBeDefined();
  });

  it("When all props are passed, then should validate properties and labels", () => {
    render(CheckboxAtom, {
      props: {
        id: "any_id",
        name: "any_name",
        label: "any_label",
        required: true,
      },
    });
    const input = screen.getByRole("checkbox");
    expect(input).toHaveProperty("id", "any_id");
    expect(input).toHaveProperty("name", "any_name");
    expect(input).toHaveProperty("checked", false);
    expect(input).toHaveProperty("required", true);
    expect(input).toHaveProperty("type", "checkbox");
    const label = screen.getByText("any_label");
    expect(label).toBeDefined();
  });

  it("When the box is clicked, then should set input to checked", async () => {
    render(CheckboxAtom, {
      props: {
        id: "any_id",
        name: "any_name",
        label: "any_label",
      },
    });
    const box = screen.getByRole("input-box");
    const input = screen.getByRole("checkbox");
    expect(input).toHaveProperty("checked", false);
    await fireEvent.click(box);
    expect(input).toHaveProperty("checked", true);
  });

  it("When the input is clicked, then should set input to checked", async () => {
    render(CheckboxAtom, {
      props: {
        id: "any_id",
        name: "any_name",
        label: "any_label",
      },
    });
    const input = screen.getByRole("checkbox");
    expect(input).toHaveProperty("checked", false);
    await fireEvent.click(input);
    expect(input).toHaveProperty("checked", true);
  });

  it("When the label is clicked, then should set input to checked", async () => {
    render(CheckboxAtom, {
      props: {
        id: "any_id",
        name: "any_name",
        label: "any_label",
      },
    });
    const label = screen.getByText("any_label");
    const input = screen.getByRole("checkbox");
    expect(input).toHaveProperty("checked", false);
    await fireEvent.click(label);
    expect(input).toHaveProperty("checked", true);
  });
});
