import { isPropercase, properCase } from "./propercase";

test("isPropercase()", () => {
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
  expect(isPropercase("1st Avenue")).toStrictEqual(true);
});

test("properCase()", () => {
  expect(properCase("o'grady")).toStrictEqual("O'Grady");
  expect(properCase("don't")).toStrictEqual("Don't");
  expect(properCase("mary-anne")).toStrictEqual("Mary-Anne");
  expect(properCase("hELICOPTER")).toStrictEqual("Helicopter");
});