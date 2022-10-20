class A {
  name = "Kabir Sagar";
  city = "Delhi";

  printPersonalDetails() {
    console.log(this.name, this.city); //100
  }
}

class B extends A {
  email = "KS@gmail.com";
  phone = 99999999;

  details() {
    this.name = "Darsh";

    this.printPersonalDetails();
    console.log(this.email, this.phone);
  }
}

var b1 = new B();
b1.details();
