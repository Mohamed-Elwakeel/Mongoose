const mongoose = require("mongoose");
const Person = require("./Person.js");

mongoose.connect("mongodb://127.0.0.1:27017/contact");

const person = Person.create({
  name: "Mohamed",
  age: 28,
  favoriteFood: ["Pizza", "Fries", "Sushi"],
});

console.log(person);
