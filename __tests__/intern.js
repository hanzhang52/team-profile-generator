const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Sean", 1, "Sean@test.com", "University of Kansas");

  expect(intern.getName()).toBe("Sean");
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getEmail()).toBe("Sean@test.com");
  expect(intern.getSchool()).toBe("University of Kansas");
  expect(intern.getRole()).toBe("Intern");
});
