import { isDate, findDate } from "./date";

test("isDate()", () => {
  expect(isDate("Non-empty string")).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate("20190101")).toBe(false);
  expect(isDate("2019-01-01")).toBe(true);
  expect(isDate("2019-02-29")).toBe(false); // does not match leap year errors
});

test("findDate()", () => {
  const m = findDate("New Years Eve is on 2020-12-31 this year.");
  expect(m[0][0]).toBe("2020-12-31");
});