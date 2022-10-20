class Student {
  name;
  city;

  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  display() {
    console.log(this.name, this.city);
  }
}

var s1 = new Student("Rahul", "Bhopal");
var s2 = new Student("Ziya", "Mumbai");
// s1.name = "Raj";
// s1.city = "Delhi";

// s2.name = "Sneha";
// s2.city = "Banglore";

s1.display();
s2.display();
