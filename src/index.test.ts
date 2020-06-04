import {
  isApostrophe, isDate, isHyphen, isNHSNumber, isNumeric, isPropercase, isSpace,
  left, reEmail, rePostcode, reURL, reYYYYMMDD, right
} from ".";

test("Test isApostrophe()", () => {
  expect(isApostrophe("'")).toStrictEqual(true);
  expect(isApostrophe("‘")).toStrictEqual(true);
  expect(isApostrophe("’")).toStrictEqual(true);
  expect(isApostrophe("`")).toStrictEqual(true);
  expect(isApostrophe("")).toStrictEqual(false);
  expect(isApostrophe("'O")).toStrictEqual(false);
});

test("isDate function tests", () => {
  expect(isDate("Non-empty string")).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(NaN)).toBe(false);
  expect(isDate(42)).toBe(false);
  expect(isDate(new Date())).toBe(true);
  expect(isDate("20190101", reYYYYMMDD)).toBe(false);
  expect(isDate("2019-01-01", reYYYYMMDD)).toBe(true);
  // note: leap year errors are not handled
  expect(isDate("2019-02-29", reYYYYMMDD)).toBe(true);
});

test("isEmail function tests", () => {
  expect(reEmail.test("joe.soap@aol.com")).toBe(true);
  expect(reEmail.test("@joe.soap@")).toBe(false);
});

test("Test isHyphen()", () => {
  expect(isHyphen("‐")).toStrictEqual(true);
  expect(isHyphen("‑")).toStrictEqual(true);
  expect(isHyphen("-")).toStrictEqual(true);
  expect(isHyphen("⁃")).toStrictEqual(true);
  expect(isHyphen("")).toStrictEqual(false);
  expect(isHyphen("-D")).toStrictEqual(false);
});

test("isNHSNumber function tests", () => {
  expect(isNHSNumber("446 610 5715")).toBe(true);
  expect(isNHSNumber("446 610 1234")).toBe(false);
  expect(isNHSNumber("401 023 2137")).toBe(true);
  expect(isNHSNumber("9961234567")).toBe(false);
  expect(isNHSNumber("1111111111")).toBe(false);
});

test("isNumeric function tests", () => {
  expect(isNumeric("Non-empty string")).toBe(false);
  expect(isNumeric("")).toBe(false);
  expect(isNumeric(null)).toBe(false);
  expect(isNumeric(undefined)).toBe(false);
  expect(isNumeric(NaN)).toBe(false);
  expect(isNumeric(42)).toBe(true);
  expect(isNumeric(-42.0)).toBe(true);
  expect(isNumeric(0e2)).toBe(true);
});

test("isPostcode function tests", () => {
  expect(rePostcode.test("GIR 0AA")).toBe(true);
  expect(rePostcode.test("gir0aa")).toBe(true);
  expect(rePostcode.test("E9 1AA")).toBe(true);
  expect(rePostcode.test("F10 3BB")).toBe(true);
  expect(rePostcode.test("IG1 4CC")).toBe(true);
  expect(rePostcode.test("RB11 2DE")).toBe(true);
  expect(rePostcode.test("P5V 8FF")).toBe(true);
  expect(rePostcode.test("EC8W 0AA")).toBe(true);
  expect(rePostcode.test("Non-empty string")).toBe(false);
  expect(rePostcode.test("")).toBe(false);
});

test("Test isPropercase()", () => {
  expect(isPropercase("")).toStrictEqual(false);
  expect(isPropercase("dOG")).toStrictEqual(false);
  expect(isPropercase("DOG")).toStrictEqual(false);
  expect(isPropercase("dog")).toStrictEqual(false);
  expect(isPropercase("Dog")).toStrictEqual(true);
  expect(isPropercase("I")).toStrictEqual(true);
  expect(isPropercase("i")).toStrictEqual(false);
  expect(isPropercase("john-Paul")).toStrictEqual(false);
  expect(isPropercase("John-Paul")).toStrictEqual(true);
  expect(isPropercase("John Paul")).toStrictEqual(true);
  expect(isPropercase("John paul")).toStrictEqual(false);
  expect(isPropercase("O'Grady")).toStrictEqual(true);
});

test("Test isSpace()", () => {
  expect(isSpace("")).toStrictEqual(false);
  expect(isSpace(" ")).toStrictEqual(true);
  expect(isSpace("I ")).toStrictEqual(false);
  expect(isSpace("\t")).toStrictEqual(true);
});

test("isURL function tests", () => {
  expect(reURL.test("https://www.google.com")).toBe(true);
  expect(reURL.test("https://www.go ogle.com")).toBe(false);
});

test("Test left hand string selection", () => {
  expect(left("Red lorry, yellow lorry", 3)).toStrictEqual("Red");
  expect(left("Red lorry, yellow lorry", 0)).toStrictEqual("Red lorry, yellow lorry");
  expect(left("Red lorry, yellow lorry", -3)).toStrictEqual("Red");
  expect(left("Red lorry, yellow lorry", 500)).toStrictEqual("Red lorry, yellow lorry");
});

test("Test right hand string selection", () => {
  expect(right("Red lorry, yellow lorry", 5)).toStrictEqual("lorry");
  expect(right("Red lorry, yellow lorry", 0)).toStrictEqual("Red lorry, yellow lorry");
  expect(right("Red lorry, yellow lorry", -5)).toStrictEqual("lorry");
  expect(right("Red lorry, yellow lorry", 500)).toStrictEqual("Red lorry, yellow lorry");
});