const employees = require("./employees");
const employees = require("./employees");

class Manager extends employees {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Property school is assigned to this class
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // Assigning role when declaring new object
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
