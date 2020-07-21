import { isDate, findDate } from "./date";

test("isDate()", () => {
  expect(isDate("Non-empty string")).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate("20190101")).toBe(false);
  expect(isDate("2019-01-01")).toBe(true);
  expect(isDate("2019-02-29")).toBe(false); // does not match leap year errors
  expect(isDate("01-01-2019")).toBe(true);
  expect(isDate("1/1/2019")).toBe(true);
});

test("findDate()", () => {
  const m = findDate(`Dates to locate are:
2020-12-31, 2020/12/01, 2020.1.1, 2019-Apr-01, 31\\3\\2019, 14 Apr 2018, 2018 Dec 15, 2019 Aug 1st, November 4th, 2022, 03rd September 2018,
2nd of February 2010, January the 18th`);
  expect(m[0][0]).toBe("2020-12-31");
  expect(m[1][0]).toBe("2020/12/01");
  expect(m[2][0]).toBe("2020.1.1");
  expect(m[3][0]).toBe("2019-Apr-01");
  expect(m[4][0]).toBe("31\\3\\2019");
  expect(m[5][0]).toBe("14 Apr 2018");
  expect(m[6][0]).toBe("2018 Dec 15");
  expect(m[7][0]).toBe("2019 Aug 1st");
  expect(m[8][0]).toBe("November 4th, 2022");
  expect(m[9][0]).toBe("03rd September 2018");
  expect(m[10][0]).toBe("2nd of February 2010");
  expect(m[11][0]).toBe("January the 18th");
});