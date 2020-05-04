import { left, isApostrophe, isHyphen, isPropercase, isSpace, right } from ".";

test("Test left hand string selection", () => {
  expect(left("Red lorry, yellow lorry", 3)).toStrictEqual("Red");
  expect(left("Red lorry, yellow lorry", 0)).toStrictEqual("Red lorry, yellow lorry");
  expect(left("Red lorry, yellow lorry", -3)).toStrictEqual("Red");
  expect(left("Red lorry, yellow lorry", 500)).toStrictEqual("Red lorry, yellow lorry");
});

test("Test isApostrophe()", () => {
  expect(isApostrophe("'")).toStrictEqual(true);
  expect(isApostrophe("‘")).toStrictEqual(true);
  expect(isApostrophe("’")).toStrictEqual(true);
  expect(isApostrophe("`")).toStrictEqual(true);
  expect(isApostrophe("")).toStrictEqual(false);
  expect(isApostrophe("'O")).toStrictEqual(false);
});

test("Test isHyphen()", () => {
  expect(isHyphen("‐")).toStrictEqual(true);
  expect(isHyphen("‑")).toStrictEqual(true);
  expect(isHyphen("-")).toStrictEqual(true);
  expect(isHyphen("⁃")).toStrictEqual(true);
  expect(isHyphen("")).toStrictEqual(false);
  expect(isHyphen("-D")).toStrictEqual(false);
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

test("Test right hand string selection", () => {
  expect(right("Red lorry, yellow lorry", 5)).toStrictEqual("lorry");
  expect(right("Red lorry, yellow lorry", 0)).toStrictEqual("Red lorry, yellow lorry");
  expect(right("Red lorry, yellow lorry", -5)).toStrictEqual("lorry");
  expect(right("Red lorry, yellow lorry", 500)).toStrictEqual("Red lorry, yellow lorry");
});