{
  const numbers = [10, 304, 34, 455, 545, 54];
  numbers.forEach(myFunction);

  function myFunction(value, index, array) {
    console.log(value * index, array);
  }
}

{
  const numbers = [434, 4, 33, 54, 545, 224, 56];
  const doubledNumbers = numbers.map(myFunction);
  function myFunction(value) {
    return value * 2;
  }
  console.log(doubledNumbers);
}

{
  const numbers = [4348, 45458, 5488, 203, 50, 4549];
  const over4500 = numbers.filter(myFunction);

  function myFunction(value) {
    return value > 4500;
  }
  console.log(over4500);
}

{
  const numbers = [34, 444, 212, 555, 666];
  let sum = numbers.reduce(myFunction, 0);
  function myFunction(total, value, index, array) {
    return total + value;
  }

  console.log(sum);
}

{
  const myArray = Array.from("ABCDEFG");
  console.log(myArray);
}

{
  const fruits = ["Apple", "Banna", "Cherry", "Blackberry"];
  const keys = fruits.keys();
  console.log(keys);

  for (let x of keys) {
    console.log(x);
  }
}
{
  const fruits = ["apple", "banna", "cherry", "litchi"];

  for (let x of fruits) {
    console.log(x);
  }
}
