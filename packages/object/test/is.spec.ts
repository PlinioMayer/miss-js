import { is } from "@object";

describe("[object] is", () => {
  it("must compare two values", () => {
    const value = {};
    expect(is(value).equal(value)).toBe(true);
    expect(is(value).equal({})).toBe(false);
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
    expect(is(new Date()).truthy()).toBe(true);
    expect(is(Symbol()).truthy()).toBe(true);
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
    expect(is(new Date()).falsy()).toBe(false);
    expect(is(Symbol()).falsy()).toBe(false);
  });

  it("must check if value is an object", () => {
    expect(is(true).object()).toBe(false);
    expect(is({}).object()).toBe(true);
    expect(is([]).object()).toBe(true);
    expect(is(0).object()).toBe(false);
    expect(is(1).object()).toBe(false);
    expect(is(-1).object()).toBe(false);
    expect(is("").object()).toBe(false);
    expect(is("teste").object()).toBe(false);
    expect(is(null).object()).toBe(true);
    expect(is(undefined).object()).toBe(false);
    expect(is(new Date()).object()).toBe(true);
    expect(is(Symbol()).object()).toBe(false);
  });

  it("must check if value is an array", () => {
    expect(is(true).array()).toBe(false);
    expect(is({}).array()).toBe(false);
    expect(is([]).array()).toBe(true);
    expect(is(0).array()).toBe(false);
    expect(is(1).array()).toBe(false);
    expect(is(-1).array()).toBe(false);
    expect(is("").array()).toBe(false);
    expect(is("teste").array()).toBe(false);
    expect(is(null).array()).toBe(false);
    expect(is(undefined).array()).toBe(false);
    expect(is(new Date()).array()).toBe(false);
    expect(is(Symbol()).array()).toBe(false);
  });

  it("must check if value is a date", () => {
    expect(is(true).date()).toBe(false);
    expect(is({}).date()).toBe(false);
    expect(is([]).date()).toBe(false);
    expect(is(0).date()).toBe(false);
    expect(is(1).date()).toBe(false);
    expect(is(-1).date()).toBe(false);
    expect(is("").date()).toBe(false);
    expect(is("teste").date()).toBe(false);
    expect(is(null).date()).toBe(false);
    expect(is(undefined).date()).toBe(false);
    expect(is(new Date()).date()).toBe(true);
    expect(is(Symbol()).date()).toBe(false);
  });

  it("must check if value is a string", () => {
    expect(is(true).string()).toBe(false);
    expect(is({}).string()).toBe(false);
    expect(is([]).string()).toBe(false);
    expect(is(0).string()).toBe(false);
    expect(is(1).string()).toBe(false);
    expect(is(-1).string()).toBe(false);
    expect(is("").string()).toBe(true);
    expect(is("teste").string()).toBe(true);
    expect(is(null).string()).toBe(false);
    expect(is(undefined).string()).toBe(false);
    expect(is(new Date()).string()).toBe(false);
    expect(is(Symbol()).string()).toBe(false);
  });

  it("must check if value is a number", () => {
    expect(is(true).number()).toBe(false);
    expect(is({}).number()).toBe(false);
    expect(is([]).number()).toBe(false);
    expect(is(0).number()).toBe(true);
    expect(is(1).number()).toBe(true);
    expect(is(-1).number()).toBe(true);
    expect(is("").number()).toBe(false);
    expect(is("teste").number()).toBe(false);
    expect(is(null).number()).toBe(false);
    expect(is(undefined).number()).toBe(false);
    expect(is(new Date()).number()).toBe(false);
    expect(is(Symbol()).number()).toBe(false);
  });

  it("must check if value is a boolean", () => {
    expect(is(true).boolean()).toBe(true);
    expect(is(false).boolean()).toBe(true);
    expect(is({}).boolean()).toBe(false);
    expect(is([]).boolean()).toBe(false);
    expect(is(0).boolean()).toBe(false);
    expect(is(1).boolean()).toBe(false);
    expect(is(-1).boolean()).toBe(false);
    expect(is("").boolean()).toBe(false);
    expect(is("teste").boolean()).toBe(false);
    expect(is(null).boolean()).toBe(false);
    expect(is(undefined).boolean()).toBe(false);
    expect(is(new Date()).boolean()).toBe(false);
    expect(is(Symbol()).boolean()).toBe(false);
  });

  it("must check if value is undefined", () => {
    expect(is(true).undefined()).toBe(false);
    expect(is({}).undefined()).toBe(false);
    expect(is([]).undefined()).toBe(false);
    expect(is(0).undefined()).toBe(false);
    expect(is(1).undefined()).toBe(false);
    expect(is(-1).undefined()).toBe(false);
    expect(is("").undefined()).toBe(false);
    expect(is("teste").undefined()).toBe(false);
    expect(is(null).undefined()).toBe(false);
    expect(is(undefined).undefined()).toBe(true);
    expect(is(new Date()).undefined()).toBe(false);
    expect(is(Symbol()).undefined()).toBe(false);
  });

  it("must check if value is null", () => {
    expect(is(true).null()).toBe(false);
    expect(is({}).null()).toBe(false);
    expect(is([]).null()).toBe(false);
    expect(is(0).null()).toBe(false);
    expect(is(1).null()).toBe(false);
    expect(is(-1).null()).toBe(false);
    expect(is("").null()).toBe(false);
    expect(is("teste").null()).toBe(false);
    expect(is(null).null()).toBe(true);
    expect(is(undefined).null()).toBe(false);
    expect(is(new Date()).null()).toBe(false);
    expect(is(Symbol()).null()).toBe(false);
  });

  it("must check if value is a symbol", () => {
    expect(is(true).symbol()).toBe(false);
    expect(is({}).symbol()).toBe(false);
    expect(is([]).symbol()).toBe(false);
    expect(is(0).symbol()).toBe(false);
    expect(is(1).symbol()).toBe(false);
    expect(is(-1).symbol()).toBe(false);
    expect(is("").symbol()).toBe(false);
    expect(is("teste").symbol()).toBe(false);
    expect(is(null).symbol()).toBe(false);
    expect(is(undefined).symbol()).toBe(false);
    expect(is(new Date()).symbol()).toBe(false);
    expect(is(Symbol()).symbol()).toBe(true);
  });
});
