const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 8,
  review: "Yummy"
});


const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const People = mongoose.model("people", peopleSchema);

const people = new People({
  name: "John",
  age: 37
});
people.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit"
});

const mango = new Fruit({
  name: "Mango",
  score: 8,
  review: "Love Mango"
});

const banana = new Fruit({
  name: "Banana",
  score: 7,
  review: "So healthy"
});

// //Fruit.insertMany([kiwi ,mango, banana],function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("Sucess")
//   }
// });

Fruit.find(function(err, fruits){
if(err){
  console.log(err);
}else{

  mongoose.connection.close();

  fruits.forEach(function(fruit){
      console.log(fruit.name);
}
 );
  }
});
