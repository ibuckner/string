import { findEmail } from "./email";

test("findEmail() - valid entries", () => {
  const t1 = `jsmith@test.com, 
  jsmith-100@test.com, 
  jsmith.100@test.co.uk, 
  jsmith123@test.com, 
  jsmith-100@test.net, 
  jsmith.100@test.com.au, 
  jsmith@1.com, 
  j.smith@gmail.com.com, 
  jsmith_100@gmail.com, 
  j.smith.100@yahoo-test.com`;
  const r1 = findEmail(t1);
  expect(r1[0][0]).toBe("jsmith@test.com");
  expect(r1[1][0]).toBe("jsmith-100@test.com");
  expect(r1[2][0]).toBe("jsmith.100@test.co.uk");
  expect(r1[3][0]).toBe("jsmith123@test.com");
  expect(r1[4][0]).toBe("jsmith-100@test.net");
  expect(r1[5][0]).toBe("jsmith.100@test.com.au");
  expect(r1[6][0]).toBe("jsmith@1.com");
  expect(r1[7][0]).toBe("j.smith@gmail.com.com");
  expect(r1[8][0]).toBe("jsmith_100@gmail.com");
  expect(r1[9][0]).toBe("j.smith.100@yahoo-test.com");
});
