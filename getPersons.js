class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

function createPersonalRecords() {
  return [
    new PersonalRecord("Anna", "Simpson", 22, "anna@yahoo.com"),
    new PersonalRecord("SoftUni"),
    new PersonalRecord("Stephan", "Johnson", 25),
    new PersonalRecord("Gabriel", "Peterson", 24, "g.p@gmail.com"),
  ];
}
