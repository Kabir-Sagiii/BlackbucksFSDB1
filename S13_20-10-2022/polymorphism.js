class SeniorStudent {
  technology = "FSD";
  platformName = "Blackbucks";

  printDetails() {
    console.log(this.technology, this.platformName);
  }
}

class JuniorStudent extends SeniorStudent {
  coursePrice = 5000;
  qty = 3;
  totalAmount = 0;
  printDetails() {
    super.printDetails();
    this.totalAmount = this.coursePrice * this.qty;
    console.log(this.totalAmount);
  }
}

var js = new JuniorStudent();
js.printDetails();
