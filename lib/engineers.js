const Employees = require("./employees");

class Engineers extends Employees {
  constructor(name, id, email, github) {
    super(name, id, email);
    // Property github is assigned to this class
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  // Assigning role when declaring new object
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineers;
