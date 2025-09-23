import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import QueryTypeOptionsMolecule from "../../src/molecules/QueryTypeOptionsMolecule.vue";

describe("Given the Query Type Options molecule component", () => {
  it("Then should validate label and elements", () => {
    render(QueryTypeOptionsMolecule);
    const label = screen.getByText(/query type/i);
    const generalInput = screen.getByRole("checkbox", {
      name: /general enquiry/i,
    });
    const supportInput = screen.getByRole("checkbox", {
      name: /support request/i,
    });
    expect(generalInput).toBeDefined();
    expect(generalInput).toHaveProperty("checked", false);
    expect(supportInput).toBeDefined();
    expect(supportInput).toHaveProperty("checked", false);
    expect(label).toBeDefined();
  });

  it("When general input is clicked, then should be checked and emit select event", async () => {
    const { emitted } = render(QueryTypeOptionsMolecule);
    const generalInput = screen.getByRole("checkbox", {
      name: /general enquiry/i,
    });
    expect(emitted().select).toBeUndefined();
    expect(generalInput).toHaveProperty("checked", false);
    await fireEvent.click(generalInput);
    expect(emitted().select).toEqual([["general"]]);
    expect(generalInput).toHaveProperty("checked", true);
  });

  it("When general input is clicked twice, then should be checked and emit select event once", async () => {
    const { emitted } = render(QueryTypeOptionsMolecule);
    const generalInput = screen.getByRole("checkbox", {
      name: /general enquiry/i,
    });
    expect(emitted().select).toBeUndefined();
    expect(generalInput).toHaveProperty("checked", false);
    await fireEvent.click(generalInput);
    expect(emitted().select).toEqual([["general"]]);
    expect(generalInput).toHaveProperty("checked", true);
    await fireEvent.click(generalInput);
    expect(emitted().select).toEqual([["general"]]);
    expect(generalInput).toHaveProperty("checked", true);
  });

  it("When support input is clicked, then should be checked and emit select event", async () => {
    const { emitted } = render(QueryTypeOptionsMolecule);
    const supportInput = screen.getByRole("checkbox", {
      name: /support request/i,
    });
    expect(emitted().select).toBeUndefined();
    expect(supportInput).toHaveProperty("checked", false);
    await fireEvent.click(supportInput);
    expect(emitted().select).toEqual([["support"]]);
    expect(supportInput).toHaveProperty("checked", true);
  });

  it("When support input is clicked twice, then should be checked and emit select event once", async () => {
    const { emitted } = render(QueryTypeOptionsMolecule);
    const supportInput = screen.getByRole("checkbox", {
      name: /support request/i,
    });
    expect(emitted().select).toBeUndefined();
    expect(supportInput).toHaveProperty("checked", false);
    await fireEvent.click(supportInput);
    expect(emitted().select).toEqual([["support"]]);
    expect(supportInput).toHaveProperty("checked", true);
    await fireEvent.click(supportInput);
    expect(emitted().select).toEqual([["support"]]);
    expect(supportInput).toHaveProperty("checked", true);
  });
});
