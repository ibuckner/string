import { findUKTelephone } from "./telephone";

test("findDate()", () => {
  const m = findUKTelephone(`The numbers are:
  John +44 20 8534 1254
  Mary 02085431234
  James 0115 123 4567`);
  expect(m[0][0]).toBe("+44 20 8534 1254");
  expect(m[1][0]).toBe("02085431234");
  expect(m[2][0]).toBe("0115 123 4567");
});