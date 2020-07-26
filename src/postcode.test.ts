import { findUKPostcode } from "./postcode";

test("findUKPostcode()", () => {
  const m = findUKPostcode(`W1J 7NT, DE12 8HJ, SW1A 1AA, PL7 1RF, IM94AJ, GY1 3EW, W2 1JB, GIR 0AA, EC1A 1BB, and 0X5 1RE`);
  expect(m[0][0]).toBe("W1J 7NT");
  expect(m[1][0]).toBe("DE12 8HJ");
  expect(m[2][0]).toBe("SW1A 1AA");
  expect(m[3][0]).toBe("PL7 1RF");
  expect(m[4][0]).toBe("IM94AJ");
  expect(m[5][0]).toBe("GY1 3EW");
  expect(m[6][0]).toBe("W2 1JB");
  expect(m[7][0]).toBe("GIR 0AA");
  expect(m[8][0]).toBe("EC1A 1BB");
  expect(m[9][0]).toBe("0X5 1RE");
});