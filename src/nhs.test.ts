import {
  isNHSNumber, findNHSNumber
} from "./nhs";

test("isNHSNumber()", () => {
  expect(isNHSNumber("446 610 5715")).toBe(true);
  expect(isNHSNumber("446 610 1234")).toBe(false);
  expect(isNHSNumber("401 023 2137")).toBe(true);
  expect(isNHSNumber("9961234567")).toBe(false);
  expect(isNHSNumber("1111111111")).toBe(false);
  expect(isNHSNumber("33 44")).toBe(false);
});

test("findNHSNumber()", () => {
  const m = findNHSNumber("The list is 446 610 5715, 446 610 1 2 34, 401 0232 137, 9961234567, 1111111111");
  expect(m[0][0]).toBe("446 610 5715");
  expect(m[1][0]).toBe("446 610 1 2 34");
  expect(m[2][0]).toBe("401 0232 137");
  expect(m[3][0]).toBe("9961234567");
  expect(m[4]).toBeUndefined();
});