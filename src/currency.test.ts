import { findCurrency } from "./currency";

test("findDate()", () => {
  const m = findCurrency(`The shopping list was:
  Apples      $2.28 or 2 dollars and 28 cents,
  Oranges     £5.64 or 5 pounds and 64p,
  Pears       €0.90 or 90c`);
  expect(m[0][0]).toBe("$2.28");
  expect(m[1][0]).toBe("2 dollars");
  expect(m[2][0]).toBe("28 cents");
  expect(m[3][0]).toBe("£5.64");
  expect(m[4][0]).toBe("5 pounds");
  expect(m[5][0]).toBe("64p");
  expect(m[6][0]).toBe("€0.90");
  expect(m[7][0]).toBe("90c");
});