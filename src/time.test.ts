import { findTime } from "./time";

test("findTime())", () => {
  const m = findTime(`Times are:
  at 10.52am BST, 12 o'clock, 23:00, since 0900hrs, 3pm, 15:11:59 BST, 
  At Home This Morning @0800`);
  expect(m[0][0]).toBe("10.52am BST");
  expect(m[1][0]).toBe("12 o'clock");
  expect(m[2][0]).toBe("23:00");
  expect(m[3][0]).toBe("0900hrs");
  expect(m[4][0]).toBe("3pm");
  expect(m[5][0]).toBe("15:11:59 BST");
  expect(m[6][0]).toBe("@0800");
});