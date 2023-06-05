const mongoose = require("mongoose");
const Person = require("./Person.js");

mongoose.connect("mongodb://127.0.0.1:27017/contact");

const person = Person.create([
  {
    name: "Mohamed",
    age: 28,
    favoriteFood: ["Pizza", "Fries", "Sushi"],
  },
  {
    name: "Mabrouk",
    age: 28,
    favoriteFood: ["Burgers", "Lasagna"],
  },
  {
    name: "Farouk",
    age: 28,
    favoriteFood: ["Noddles", "Pizza", "Rice"],
  },
]); // .then((person) => console.log(person));

// Person.find({ name: "Mohamed" }).then((people) => console.log(people));

// Person.findOne({ favoriteFoods: "pizza" }).then((people) =>
//   console.log(people)
// );

// Person.findById("647de41d6ccdc8e6aada2574").then((people) =>
//   console.log(people)
// );

// Person.findOne({ name: "Mabrouk" })
//   .then((person) => {
//     person.favoriteFood.push("HamBurgers");
//     return person.save();
//   })
//   .then((person) => console.log("saved successfully", person));

// Person.findOneAndUpdate(
//   { name: "Mabrouk" },
//   { $set: { age: 31 } },
//   { new: true }
// ).then((person) => console.log(person));

// Person.findByIdAndDelete("647de404468ac814bdd00131").then((person) =>
//   console.log(person)
// );

// Person.deleteMany().then((deleted) => console.log(deleted));

Person.find()
  .where("favoriteFoods")
  .elemMatch({ favoriteFoods: "Pizza" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age");
