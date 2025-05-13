import { is } from "@boolean";

describe("[boolean] is", () => {
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
});
