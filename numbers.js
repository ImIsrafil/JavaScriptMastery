// JavaScript has only one type of number: number written with or without decimal
{
  let x = 3.14;
  let y = 3;
  console.log(x);
  console.log(y);
}

// Extra large or Extra small numbers can be written with scientific notation (exponent)
{
  let x = 1.6e-19;
  let y = 3e8;
  console.log(x);
  console.log(y);
}
// JavaScript Numbers are always 64bit floating point number
{
  let x = 999999999999999;
  let y = 9999999999999999;
  console.log(x);
  console.log(y);
}
// The floating point arithmetics are not always 100% accurate
{
  let x = 0.2 + 0.1;
  console.log(x);
}
{
  let x = (0.2 * 10 + 0.1 * 10) / 10;
  console.log(x);
}

// Adding Two Numbers
{
  let x = 10;
  let y = 20;
  let z = x + y;
  console.log(z);
}
// If we add two string the result will be string concatenation
{
  let x = "10";
  let y = "20";
  let z = x + y;
  console.log(z);
}
{
  let x = 10;
  let y = "20";
  let z = x + y;
  console.log(z);
}
{
  let x = 10;
  let y = 20;
  let z = "30";
  let result = x + y + z;
  console.log(result);
}
{
  let x = "10";
  let y = "5";
  let z = x - y;
  console.log(z);

  let i = x * y;
  console.log(i);

  let j = x / y;
  console.log(j);

  let k = x % y;
  console.log(k);
}
{
  let x = 10;
  let y = "5";
  console.log(x / y);
  console.log(x * y);
  console.log(x - y);
}

// NaN  --> Not a Number
{
  let x = 10;
  let y = "apple";
  let z = x / y;
  console.log(z); // NaN
}
{
  let x = "10" / "Apple";
  console.log(x);
}
{
  let x = "Apple" * "Apple";
  console.log(x);
}
{
  let x = NaN;
  console.log(typeof x);
}
{
  let x = 10 / 0;
  console.log(x);
}

{
  let x = 155;
  console.log(x.toString(2));
  console.log(x.toString(10));
  console.log(x.toString(16));
}
