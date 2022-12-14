let text = "Hello World!";
console.log(text.length);

// Extracting String Part
// slice(start, end)
// substring(start, end)
// substr(start, length)
console.log(text);
let textPart1 = text.slice(0, 5);
console.log(textPart1);
let textPart2 = text.slice(-6, -1);
console.log(textPart2);

let textPart3 = text.slice(6);
console.log(textPart3);

// substring did not allow nagetive indexing
let textPart4 = text.substring(0, 5);
console.log(textPart4);

let textPart5 = text.substr(6, 5);
console.log(textPart4);

{
  // Replacing String Content
  let text = "JavaScript Developer and JavaScript Developer";
  let newText = text.replace("JavaScript", "Python");
  console.log(newText);

  let newText1 = text.replaceAll("JavaScript", "Python");
  console.log(newText1);
}
{
  //Converting UpperCase to LowerCase and vise versa
  let text = "Hello World";
  let upperCaseText = text.toUpperCase();
  console.log(upperCaseText);

  let lowerCaseText = upperCaseText.toLowerCase();
  console.log(lowerCaseText);
}
{
  // JavaScript String Concat
  let text1 = "Hello, my name is Israfil";
  let text2 = "I am a full-stack developer.";
  let text3 = text1.concat(". ", text2);
  console.log(text3);
}
{
  // JavaScript String Trim
  let text1 = "   Hello World   ";
  let text2 = text1.trim();
  console.log(text2);
}
{
  // JavaScript ES2019 Introduce TrimStart
  let text1 = "     Hello World     ";
  let text2 = text1.trimStart();
  console.log(text2);
}
{
  // JavaScript ES2019 introduce trimEnd
  let text1 = "    Hello World   ";
  let text2 = text1.trimEnd();
  console.log(text2);
}
{
  let text1 = "Hello World!";
  let char = text1.charAt(0);
  console.log(char);
}
