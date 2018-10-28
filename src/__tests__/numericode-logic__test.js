import decode from "../services/numericode-logic";

describe("Numericode decode method - ", () => {
  it("can decode a code with each number inferior to 27", () => {
    expect(decode("8 5 12 12 15")).toEqual("HELLO");
  });

  it("can decode a code with numbers that are larger than 27 and divisible by 27 multiple times with no remainder", () => {
    expect(decode("216 3645 12 324 405")).toEqual("HELLO");
  });

  it("can decode a code with numbers that are larger than 27 and divisible by 27 multiple times with a remainder", () => {
    expect(decode("6 15 15 28 2 1 18")).toEqual("FOO BAR");
  });

  it("knows when an input is wrong and throws an error when this is the case", () => {
    expect(() => decode("6 15 15 28 NaN 2 1 18")).toThrowError(
      "This is not a valid input!"
    );
  });

  it("errors when an input is null", () => {
    expect(() => decode(null)).toThrowError("This is not a valid input!");
  });

  describe("With concrete examples - ", () => {
    it("decodes the first example", () => {
      expect(decode("13 27 26 5")).toEqual("MAZE");
    });

    it("decodes the second example", () => {
      expect(
        decode("432 21 19 5832 5 135 14 6561 59049 15 486 275562")
      ).toEqual("PUSHEENICORN");
    });

    it("decodes the third example", () => {
      expect(decode("20 486 21 513 19 324 5 21924 540 135 3 8")).toEqual(
        "TRUSSLE TECH"
      );
    });

    it("decodes the fourth example", () => {
      expect(decode("8 5 324 8748 295245 730 23 405 13122 12 108")).toEqual(
        "HELLO WORLD"
      );
    });
  });
});
