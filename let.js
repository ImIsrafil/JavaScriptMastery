// let x = "Hello World";
// let x = 0;
// This will raise an error: SyntaxError: Indentifier 'x' has already been declared
// Variable declared with let keyword can not be redeclared

{
  let x = 2;
}

// console.log(x); // let has a block scope cannot be accessed from outside the block;

// {
//   var x = 10;
// }
// console.log(x); // var has not any block scope it has global and function scope;

// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block:

var x = 10;

{
  var x = 20;
}

console.log(x); // x will have the value of 20

// Redeclaring a variable using the let keyword can solve this problem.
// Redeclaring a variable inside a block will not redeclare the variable outside the block:

let z = 10;
{
  let z = 5;
  console.log(z);
}
console.log(z);
