import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import ConsentMolecule from "../../src/molecules/ConsentMolecule.vue";

describe("Given the Consent Molecule component", () => {
  it("When has error is not passed, then should validate input properties and label text content without error message", () => {
    render(ConsentMolecule);
    const input = screen.getByRole("checkbox");
    const label = screen.getByText(/i consent to being contacted by the team/i);
    expect(input).toHaveProperty("type", "checkbox");
    expect(input).toHaveProperty("name", "consent-input");
    expect(input).toHaveProperty("id", "consent-input");
    expect(input).toHaveProperty("checked", false);
    expect(label).toBeDefined();
  });

  it("When has error is passed, then should validate input properties and label text content with error message", () => {
    render(ConsentMolecule, { props: { hasError: true } });
    const input = screen.getByRole("checkbox");
    const label = screen.getByText(/i consent to being contacted by the team/i);
    const errorMessage = screen.getByText(
      /To submit this form, please consent to being contacted/i,
    );
    expect(input).toHaveProperty("type", "checkbox");
    expect(input).toHaveProperty("name", "consent-input");
    expect(input).toHaveProperty("id", "consent-input");
    expect(input).toHaveProperty("checked", false);
    expect(label).toBeDefined();
    expect(errorMessage).toBeDefined();
  });

  it("When label is clicked, then should checked be true and emit click event", async () => {
    const { emitted } = render(ConsentMolecule);
    const input = screen.getByRole("checkbox");
    const label = screen.getByText(/i consent to being contacted by the team/i);
    expect(input).toHaveProperty("checked", false);
    expect(emitted()).toEqual({});
    await fireEvent.click(label);
    expect(input).toHaveProperty("checked", true);
    expect(emitted()).toHaveProperty("click", [[true]]);
  });

  it("When input is clicked, then should checked be true and emit click event", async () => {
    const { emitted } = render(ConsentMolecule);
    const input = screen.getByRole("checkbox");
    expect(input).toHaveProperty("checked", false);
    expect(emitted()).toEqual({});
    await fireEvent.click(input);
    expect(input).toHaveProperty("checked", true);
    expect(emitted()).toHaveProperty("click", [[true]]);
  });
});
