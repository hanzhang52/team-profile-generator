const employees = require("./employees");

class engineers extends employees {
  constructor(name, id, email, github) {
    super(name, id, email);
    // Property school is assigned to this class
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  // Assigning role when declaring new object
  getRole() {
    return "engineers";
  }
}

module.exports = engineers;
