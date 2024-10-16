
let student = {};
student.name = "Burnik Das";
student.email = "burnikdas6@gmail.com";
student.age = 23;

console.log(student.name);


student.age = 10;
console.log(student.age);


student.greet = function() {
  console.log("Hello, " + student.name + "!");
};

student.greet();

student.address = {};
student.address.country = "India";
student.address.city = "Kolkata";
student.address.pin_code = "700129";

console.log(student.address.country);

student.address.pin_code = "700001";
console.log(student.address);


let friend = {};
friend.name = "Rahit Das";
friend.email = "rahitdas@gmail.com";
friend.age = 23;
friend.address = {
  country: "India",
  city: "kolkata",
  pin_code: "700026"
};
friend.greet = function() {
  console.log("Hello, " + friend.name + "!");
};

friend.greet();
console.log(friend);


let topper = {};
topper.name = "Burnik Das";
topper.email = "burnikdas6@gmail.com";
topper.age = 23;
topper.address = {
  country: "India",
  city: "Kolkata",
  pin_code: "700129"
};
topper.greet = function() {
  console.log("Hello, " + topper.name + "!");
};

topper.greet();
console.log(topper);


class Student {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
      country,
      city,
      pin_code
    };
  }

  greet() {
    console.log("Hello, " + this.name + "!");
  }

  getFullAddress() {
    return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
  }
}


let student1 = new Student("Burnik Das", "burnik@gmail.com", 23, "India", "Bangalore", "560038");
let student2 = new Student("Rahit Das", "rahit@gmail.com", 24, "India", "Delhi", "110001");
let student3 = new Student("Burnik ", "burnik@gmail.com", 23, "India", "Kolkata", "700128");

console.log(student1);
console.log(student2);
console.log(student3);


student1.greet();
student2.greet();
student3.greet();

console.log(student1.getFullAddress());
console.log(student2.getFullAddress());
console.log(student3.getFullAddress());