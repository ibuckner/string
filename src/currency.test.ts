import { findBankingNumbers, findCurrency } from "./currency";

test("findBankingNumbers()", () => {
  let m = findBankingNumbers(`The accounts are:
  sort code: 12-43-95, a/c 24561278
  card: 4456 7829 4560 7976
  `);
  expect(m[0][0]).toBe("12-43-95");
  expect(m[1][0]).toBe("24561278");
  expect(m[2][0]).toBe("4456 7829 4560 7976");
});

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
  Oranges     £5.64 or 5 pounds and 64p
  Shop located at SW1P`, ["en-GB", "en-US"]);
  expect(m[0][0]).toBe("$2.28");
  expect(m[1][0]).toBe("2 dollars");
  expect(m[2][0]).toBe("28 cents");
  expect(m[3][0]).toBe("£5.64");
  expect(m[4][0]).toBe("5 pounds");
  expect(m[5][0]).toBe("64p");
  expect(m.length).toBe(6);
});