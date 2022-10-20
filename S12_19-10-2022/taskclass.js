class Iphone {
  brandName = "Apple";
  modelName = "Iphone 14";
  price = 120000;
  ram = "4gb";
  storage = "256gb";

  printAllDetails() {
    console.log(
      this.brandName,
      this.modelName,
      this.price,
      this.ram,
      this.storage
    );
  }
}

var iphone14 = new Iphone();
iphone14.printAllDetails();
