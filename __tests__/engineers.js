const Engineers = require("../lib/engineers");

test("creates an engineer object", () => {
  const engineer = new Engineers("Steve", 1, "test@test.com", "Steve");

  expect(engineer.getName()).toBe("Steve");
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getEmail()).toBe("test@test.com");
  expect(engineer.getGithub()).toBe("Steve");
  expect(engineer.getRole()).toBe("engineers");
});
