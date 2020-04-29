import { left, right } from ".";

test("Test left hand string selection", () => {
  expect(left("Red lorry, yellow lorry", 3)).toStrictEqual("Red");
  expect(left("Red lorry, yellow lorry", 0)).toStrictEqual("Red lorry, yellow lorry");
  expect(left("Red lorry, yellow lorry", -3)).toStrictEqual("Red");
  expect(left("Red lorry, yellow lorry", 500)).toStrictEqual("Red lorry, yellow lorry");
});

test("Test right hand string selection", () => {
  expect(right("Red lorry, yellow lorry", 5)).toStrictEqual("lorry");
  expect(right("Red lorry, yellow lorry", 0)).toStrictEqual("Red lorry, yellow lorry");
  expect(right("Red lorry, yellow lorry", -5)).toStrictEqual("lorry");
  expect(right("Red lorry, yellow lorry", 500)).toStrictEqual("Red lorry, yellow lorry");
});