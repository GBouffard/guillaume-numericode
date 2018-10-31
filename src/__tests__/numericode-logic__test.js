import logic from "../services/numericode-logic";

describe("Numericode logic - ", () => {

  describe("isValid - ", () => {
    it("knows when an input is valid", () => {
      expect(logic.isValid("6 15 15 28 2 1 18")).toBe(true);
    });

    it("knows when an input is invalid", () => {
      expect(logic.isValid("6 15 15 28 NaN 2 1 18")).toBe(false);
    });

    it("considers an empty input as invalid", () => {
      expect(logic.isValid(null)).toBe(false);
    });
  });

  describe("decode - ", () => {
    it("can decode a code with each number inferior to 27", () => {
      expect(logic.decode("8 5 12 12 15")).toEqual("HELLO");
    });

    it("can decode a code with numbers that are larger than 27 and divisible by 27 multiple times with no remainder", () => {
      expect(logic.decode("216 3645 12 324 405")).toEqual("HELLO");
    });

    it("can decode a code with numbers that are larger than 27 and divisible by 27 multiple times with a remainder", () => {
      expect(logic.decode("6 15 15 28 2 1 18")).toEqual("FOO BAR");
    });

    describe("With concrete examples - ", () => {
      it("decodes the first example", () => {
        expect(logic.decode("13 27 26 5")).toEqual("MAZE");
      });

      it("decodes the second example", () => {
        expect(
          logic.decode("432 21 19 5832 5 135 14 6561 59049 15 486 275562")
        ).toEqual("PUSHEENICORN");
      });

      it("decodes the third example", () => {
        expect(logic.decode("20 486 21 513 19 324 5 21924 540 135 3 8")).toEqual(
          "TRUSSLE TECH"
        );
      });

      it("decodes the fourth example", () => {
        expect(logic.decode("8 5 324 8748 295245 730 23 405 13122 12 108")).toEqual(
          "HELLO WORLD"
        );
      });
    });
  });
});
