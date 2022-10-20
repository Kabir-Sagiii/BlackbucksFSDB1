var iphone = {
  brandName: "Apple",
  modelName: "Iphone 14",
  price: 180000,
  storage: "256gb",
  ram: "4gb",
};

// console.log(iphone);

// access the property value
console.log(iphone.modelName);
console.log(iphone.ram);
console.log(iphone["ram"]);

//Insert new Property
iphone.color = "Purple";

//update the Property Value
iphone.modelName = "Iphone 14Pro";

//delete the Property

console.log(iphone);
