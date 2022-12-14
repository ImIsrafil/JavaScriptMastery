const Pi = 3.141592653589793;
console.log(Pi);
// Pi = 3.14; // This Will raise TypeError: Assignment to constant variable.
console.log(Pi);

// const pi; // This will give an error => SyntaxError: Missing initializer in const declaration;
// pi = 3.1416;

const pi = 3.14;

{
  const pi = 3.1416;
}

console.log(pi); // variable declared with const keyword has the block scope;
