import { findURL } from "./url";

test("findURL()", () => {
  const m = findURL("Locating https://www.google.com or http://google.co.uk:8080, not.a.url./dhs33 and pic.twitter.com/C74RABu8pzE");
  expect(m[0][0]).toBe("https://www.google.com");
  expect(m[1][0]).toBe("http://google.co.uk:8080");
  expect(m[2][0]).toBe("pic.twitter.com/C74RABu8pzE");
});
