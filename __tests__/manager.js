const Manager = require("../lib/manager");

test("creates a Manager object", () => {
  const manager = new Manager("John", 1, "test@test.com", "07");

  expect(manager.getName()).toBe("John");
  expect(manager.getId()).toEqual(1);
  expect(manager.getEmail()).toBe("test@test.com");
  expect(manager.getOfficeNumber()).toBe("07");
  expect(manager.getRole()).toBe("Manager");
});
