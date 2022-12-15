// JavaScript Array

// An array is a special type of variable which can hold more than one value
{
  const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars);
}
{
  const cars = [];
  cars[0] = "Saab";
  cars[1] = "BMW";
  cars[2] = "Volvo";
  console.log(cars);
}

// Accessing Array Elements
{
  const cars = ["Saab", "Volvo", "BMW"];
  let car = cars[0];
  console.log(car);
}

// Changing Array Elements
{
  const cars = ["Saab", "Volvo", "BMW"];
  let car = "Tesla";
  cars[0] = car;
  console.log(cars);
}
{
  const fruits = ["apple", "mango", "banna", "litchi", "cherry"];
  let length = fruits.length;
  console.log(length);
  fruits.sort();
  console.log(fruits);
}
{
  // Accessing Last Element
  const fruits = ["apple", "mango", "banna", "litchi", "cherry"];
  let lastElement = fruits[fruits.length - 1];
  console.log(lastElement);

  // Changing Last Element
  fruits[fruits.length - 1] = "blackberry";
  console.log(fruits);
}

{
  const numbersArr = [10, 34, 34, 56, 67, 22];

  for (let i = 0; i < numbersArr.length; i++) {
    console.log(numbersArr[i]);
  }

  numbersArr.forEach(doubleIt);

  function doubleIt(value) {
    console.log(value * 2);
  }
}

// Adding Array Element
{
  const fruits = ["apple", "banna", "cherry", "mango"];
  fruits.push("litchi");
  console.log(fruits);
}
{
  const fruits = ["apple", "banna", "cherry", "mango"];
  fruits[fruits.length] = "litchi";
  console.log(fruits);
}

{
  // How do we know about the type of Array:
  const cars = ["Saab", "Volvo", "BMW"];
  console.log(typeof cars); // this will return object

  // Way one
  console.log(cars instanceof Array);
  // Way two
  console.log(Array.isArray(cars));
}
