{
  const fruits = [
    "apple",
    "cherry",
    "banna",
    "litchi",
    "raspeberry",
    "mango",
    "blackberry",
  ];
  fruits.sort();
  console.log(fruits);
}

{
  const fruits = [
    "apple",
    "cherry",
    "banna",
    "litchi",
    "raspeberry",
    "mango",
    "blackberry",
  ];
  fruits.reverse();
  console.log(fruits);
}

{
  const numbers = [10, 20, 5, 50, 30, 25];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);
}
