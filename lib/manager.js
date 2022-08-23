const Employees = require("./employees");

class Manager extends Employees {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Property officeNumber is assigned to this class
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
