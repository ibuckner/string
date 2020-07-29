import {
  isApostrophe, isHyphen, isSpace, normalize
} from ".";

test("isApostrophe()", () => {
  expect(isApostrophe("'")).toStrictEqual(true);
  expect(isApostrophe("‘")).toStrictEqual(true);
  expect(isApostrophe("’")).toStrictEqual(true);
  expect(isApostrophe("`")).toStrictEqual(true);
  expect(isApostrophe("")).toStrictEqual(false);
  expect(isApostrophe("'O")).toStrictEqual(false);
});

test("isHyphen()", () => {
  expect(isHyphen("‐")).toStrictEqual(true);
  expect(isHyphen("‑")).toStrictEqual(true);
  expect(isHyphen("-")).toStrictEqual(true);
  expect(isHyphen("⁃")).toStrictEqual(true);
  expect(isHyphen("")).toStrictEqual(false);
  expect(isHyphen("-D")).toStrictEqual(false);
});

test("isSpace()", () => {
  expect(isSpace("")).toStrictEqual(false);
  expect(isSpace(" ")).toStrictEqual(true);
  expect(isSpace("I ")).toStrictEqual(false);
  expect(isSpace("\t")).toStrictEqual(true);
});

test("normalize()", () => {
  const before = "Hello John-   Adams,\n\nyour parcel is waiting a the UK collection center.\n\nCustomer services";
  const after = "Hello John-Adams,\nyour parcel is waiting a the UK collection center.\nCustomer services";
  expect(normalize(before)).toStrictEqual(after);
  expect(normalize("He came, he saw, he conquered")).toStrictEqual("He came, he saw, he conquered");
  expect(normalize("I saw JSmith yesTERDay.")).toStrictEqual("I saw jsmith yesterday.");
  expect(normalize("THIS IS AN ALL CAPS SENTENCE.")).toStrictEqual("This Is An All Caps Sentence.");
  expect(normalize("THE BELL INN,USA")).toStrictEqual("The Bell Inn,Usa");
  expect(normalize("I live at 23West Side")).toStrictEqual("I live at 23 West Side");
});
