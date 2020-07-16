import { findEmail } from "./email";

test("findEmail()", () => {
  const m = findEmail("Customer support: customer.services@company.com.");
  expect(m[0][0]).toBe("customer.services@company.com");
});