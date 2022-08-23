const Employees = require("../lib/employees");

test("create an employee object", () => {
  const employees = new Employees("test", 1, "test@test.com");

  expect(employees.name).toEqual(expect.any(String));
  expect(employees.id).toEqual(expect.any(Number));
  expect(employees.email).toEqual(expect.any(String));
});
