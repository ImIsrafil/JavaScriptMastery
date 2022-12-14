// JavaScript has eight deffrent data types
// String
// Number
// Boolean
// Bigint
// Undefined
// Null
// Symbol
// Object

// Object
// The object data type can contain:
// An Object
// An Array
// A Date

{
  // Number
  let length = 17;
  let weight = 40.33;
  console.log(typeof length, length);
  console.log(typeof weight, weight);

  // String
  let firstName = "Israfil";
  let lastName = "Mallick";
  console.log(typeof firstName, firstName);
  console.log(typeof lastName, lastName);

  // Boolean
  let isJavaScriptDev = true;
  let isPythonDev = false;
  console.log(typeof isJavaScriptDev, isJavaScriptDev);
  console.log(typeof isPythonDev, isPythonDev);

  // Object
  let person = {
    firstName: "Israfil",
    lastName: "Mallick",
    isWebDev: true,
    salary: 3000,
  };
  console.log(typeof person, person);

  // Array Object
  let friends = ["Alyssa", "Dianna", "Sophia", "Selena"];
  console.log(typeof friends, friends);

  const date = new Date("2022/10/23");
  console.log(typeof date, date);
}

{
  // JavaScript Types are Dynamic
  // JavaScript has dynamic types.
  // This means that the same variables can be used to hold different data types
  let x;
  console.log(typeof x); // undefined
  x = 10;
  console.log(typeof x); // number
  x = "Hello";
  console.log(typeof x); // string
}

{
  // JavaScript String
  // string using double quotes
  let carName1 = "Volvo X60";
  // string using single quotes
  let carName2 = "Volvo X60";
}
{
  // single quotes inside double quotes
  let answer1 = "It's alright";
  console.log(answer1);
  // Double quotes inside single quotes
  let answer2 = 'He is called "Johnny"';
  console.log(answer2);
}
{
  // JavaScript Number
  // All JavaScript numbers are stored as decimal numbers (floating point).
  // Numbers can be written with, or without decimals:

  // With decimal
  let number1 = 34.0;
  console.log(number1);

  // Without decimal
  let number2 = 34;
  console.log(number2);

  // Exponential Notation
  // extra large or extra small numbers can be written with scientific (exponential) notation
  let x = 123e5;
  let z = 123e-5;
  console.log(x);
  console.log(z);
}

{
  //   JavaScript BigInt
  // All JavaScript numbers are stored in a a 64-bit floating-point format.

  // JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
  let x = BigInt("123456789012345678901234567890");
  console.log(x);
}
{
  // JavaScript Booleans
  // Booleans can only have two values: true or false.
  let isDev = true;
  console.log(isDev);
}
