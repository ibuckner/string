import { isNumeric, findNumeric } from "./numeric";

test("isNumeric()", () => {
  expect(isNumeric("Non-empty string")).toBe(false);
  expect(isNumeric("")).toBe(false);
  expect(isNumeric(null)).toBe(false);
  expect(isNumeric(undefined)).toBe(false);
  expect(isNumeric(NaN)).toBe(false);
  expect(isNumeric(42)).toBe(true);
  expect(isNumeric(-42.0)).toBe(true);
  expect(isNumeric(0e2)).toBe(true);
});

test("findNumeric()", () => {
  const m = findNumeric("-43.008 and -1e+0 and .23");
  expect(m[0][0]).toBe("-43.008");
  expect(m[2][0]).toBe(".23");
  expect(m[1][0]).toBe("-1e+0");
});
