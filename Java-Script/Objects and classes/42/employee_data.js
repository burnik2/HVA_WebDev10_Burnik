class Employee {
    constructor(name, email, age, department, position, salary) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.department = department;
      this.position = position;
      this.salary = salary;
    }
  
    introduce() {
      console.log(`Hello, I am ${this.name}, ${this.position}.`);
    }
  
    displaySalary() {
      console.log(`Salary: $${this.salary}`);
    }
  }
  

  const newEmployee = new Employee(
    "Rahit Das",
    "rahit@gmail.com",
    20,
    "IT",
    "Software Engineer",
    50000
  );

  console.log(newEmployee);

  const manager = new Employee(
    "Burnik Das",
    "burnik@.com",
    23,
    "Management",
    "Project Manager",
    90000
  );

  console.log(manager);
  
  
  newEmployee.introduce();
  newEmployee.displaySalary();
  
  manager.introduce();
  manager.displaySalary();