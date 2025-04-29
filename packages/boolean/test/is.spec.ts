import { is } from "@boolean";

describe("is", () => {
  it("must compare to true", () => {
    expect(is(true).true()).toBe(true);
    expect(is({}).true()).toBe(false);
    expect(is([]).true()).toBe(false);
    expect(is(0).true()).toBe(false);
    expect(is(1).true()).toBe(false);
    expect(is(-1).true()).toBe(false);
    expect(is("").true()).toBe(false);
    expect(is("teste").true()).toBe(false);
    expect(is(null).true()).toBe(false);
    expect(is(undefined).true()).toBe(false);
  });

  it("must compare to false", () => {
    expect(is(false).false()).toBe(true);
    expect(is({}).false()).toBe(false);
    expect(is([]).false()).toBe(false);
    expect(is(0).false()).toBe(false);
    expect(is(1).false()).toBe(false);
    expect(is(-1).false()).toBe(false);
    expect(is("").false()).toBe(false);
    expect(is("teste").false()).toBe(false);
    expect(is(null).false()).toBe(false);
    expect(is(undefined).false()).toBe(false);
  });

  it("must check if value is truthy", () => {
    expect(is(true).truthy()).toBe(true);
    expect(is({}).truthy()).toBe(true);
    expect(is([]).truthy()).toBe(true);
    expect(is(0).truthy()).toBe(false);
    expect(is(1).truthy()).toBe(true);
    expect(is(-1).truthy()).toBe(true);
    expect(is("").truthy()).toBe(false);
    expect(is("teste").truthy()).toBe(true);
    expect(is(null).truthy()).toBe(false);
    expect(is(undefined).truthy()).toBe(false);
  });

  it("must check if value is falsy", () => {
    expect(is(true).falsy()).toBe(false);
    expect(is({}).falsy()).toBe(false);
    expect(is([]).falsy()).toBe(false);
    expect(is(0).falsy()).toBe(true);
    expect(is(1).falsy()).toBe(false);
    expect(is(-1).falsy()).toBe(false);
    expect(is("").falsy()).toBe(true);
    expect(is("teste").falsy()).toBe(false);
    expect(is(null).falsy()).toBe(true);
    expect(is(undefined).falsy()).toBe(true);
  });
});
