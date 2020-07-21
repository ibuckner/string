import { findCurrency } from "./currency";

test("findDate()", () => {
  let m = findCurrency(`The shopping list was:
  Apples      $2.28 or 2 dollars and 28 cents,
  Oranges     £5.64 or 5 pounds and 64p`, ["en-US"]);
  expect(m[0][0]).toBe("$2.28");
  expect(m[1][0]).toBe("2 dollars");
  expect(m[2][0]).toBe("28 cents");
  m = findCurrency(`The shopping list was:
  Apples      $2.28 or 2 dollars and 28 cents,
  Oranges     £5.64 or 5 pounds and 64p`);
  expect(m[0][0]).toBe("£5.64");
  expect(m[1][0]).toBe("5 pounds");
  expect(m[2][0]).toBe("64p");
  m = findCurrency(`The shopping list was:
  Apples      $2.28 or 2 dollars and 28 cents,
  Oranges     £5.64 or 5 pounds and 64p`, ["en-GB", "en-US"]);
  expect(m[0][0]).toBe("$2.28");
  expect(m[1][0]).toBe("2 dollars");
  expect(m[2][0]).toBe("28 cents");
  expect(m[3][0]).toBe("£5.64");
  expect(m[4][0]).toBe("5 pounds");
  expect(m[5][0]).toBe("64p");
});