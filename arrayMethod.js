// JavaScript Array Method
{
  const fruits = ["apple", "banna", "mango", "litchi"];
  console.log(fruits.toString());
  console.log(fruits.join(" "));

  fruits.pop();
  console.log(fruits);

  fruits.push("blackberry");
  console.log(fruits);

  const length = fruits.push("cherry");
  console.log(length, fruits);
}
// shift
{
  const fruits = ["apple", "banna", "cherry", "mango"];
  const fruit = fruits.shift();
  console.log(fruit);
  console.log(fruits);
}
{
  const fruits = ["apple", "banna", "cherry", "blackberry"];
  const length = fruits.unshift("litchi");
  console.log(length, fruits);
}
{
  const fruits = ["apple", "banna", "litchi", "orange"];
  delete fruits[0];
  console.log(fruits);
  console.log(typeof fruits[0]);
}

{
  const fruits1 = ["apple", "banna", "cherry"];
  const fruits2 = ["mango", "litchi", "watermelon"];
  const fruits = fruits1.concat(fruits2);
  console.log(fruits);
}

{
  const fruits = ["apple", "banna", "cherry", "mango", "litchi"];
  fruits.splice(2, 0, "blackberry", "raspberry");
  console.log(fruits);
}

{
  const fruits = ["apple", "banna", "cherry", "raspeberry", "blackberry"];
  const fruits1 = fruits.slice(0, 3);
  console.log(fruits1);
}
