// JavaScript Function

let x = sum(10, 20);
console.log(x);

function sum(a, b) {
  return a + b;
}

let celsius = toCelsius(87);
console.log(celsius.toFixed(2) + "deg");

function toCelsius(fahrenhiet) {
  return (5 / 9) * (fahrenhiet - 32);
}
