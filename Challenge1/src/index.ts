// INSTRUCTIONS:
// Replace unknown type with the correct type
let numberOfDishes: number = 50;

let favoriteSnack: string = "cake";

const ingredients: string[] = [
  "butter",
  "flour",
  "baking powder",
  "sugar",
  "eggs",
  "vanilla",
  "salt",
];

// The object is missing a value. Fill in the missing value with drinks of your choice.
const menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
} = {
  courses: 5,
  veganOption: true,
  drinkChoices: [
    "lemonade", "ceasar",
    "water", "fruit juice"
  ]
};

const strawberry: {
    name: string;
    color: string;
    sweetness: number;
} = {
  name: "Strawberry",
  color: "red",
  sweetness: 80,
};

// Correctly annotate this function parameter
function eatFruit(fruit: {
  name: string;
  color: string;
  sweetness: number;
}) {
  if (fruit.name === "Strawberry") {
    console.log("I love Strawberry!");
  }
  console.log("Fruit is very tasty.");
}

eatFruit(strawberry);

// Correctly annotate the fruitList and transformFunction parameters


const fruitList = ["Apple", "Banana", "Orange"];

// Annotate the fruitName function parameter
function bakeFruit(fruitName : string): string {
  return (`Baked ${fruitName}`);
}

function mapFruit(fruitList : string[], transformFunction : (fruitName : string) => string): string[]  {
  return fruitList.map(transformFunction);
}

const bakedFruit = mapFruit(fruitList, bakeFruit);
console.log(bakedFruit)

/*
// greetMe(name : string, callbackFn: (msg: string) => void )

  function greetMe(name, callback) {
    callback("Hello there" + name)
  }
  greetMe("John", (msg) => { console.log(msg) })

*/
