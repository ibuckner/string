import { findUKPostcode } from "./postcode";

test("findUKPostcode()", () => {
  const m = findUKPostcode("The list is GIR 0AA, gir0aa, E9 1AA, F10 3BB,RB11 2DE, EC8W 0AA");
  expect(m[0][0]).toBe("GIR 0AA");
  expect(m[1][0]).toBe("gir0aa");
  expect(m[2][0]).toBe("E9 1AA");
  expect(m[3][0]).toBe("F10 3BB");
  expect(m[4][0]).toBe("RB11 2DE");
  expect(m[5][0]).toBe("EC8W 0AA");
});