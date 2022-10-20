class Users {
  name;
  id;
  city;

  printAllDetails() {
    console.log(this.name, this.id, this.city);
  }
}

var obj1 = new Users();
obj1.name = "Darsh";
obj1.id = 191;
obj1.city = "Delhi";
obj1.printAllDetails();
