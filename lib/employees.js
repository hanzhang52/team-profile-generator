class employees {
  constructor(name, id, email) {
    // Default properties will be assigned to the children classes
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Will all return data for each child class
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "employees;";
  }
}
module.exports = employees;
