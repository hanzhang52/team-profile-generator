const employees = require("./employees");

class Intern extends employees {
  constructor(name, id, email, school) {
    super(name, id, email);
    // Property school is assigned to this class
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  // Assigning role when declaring new object
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
