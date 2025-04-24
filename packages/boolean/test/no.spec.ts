import { no } from "@boolean";

describe("no", () => {
  it("must return true", () => {
    expect(no()).toBe(false);
  });
});
