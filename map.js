const fruits = new Map([
  ["apple", 200],
  ["banna", 50],
  ["cherry", 300],
]);

console.log(fruits);
console.log(fruits.get("apple"));
fruits.set("apple", 300);
console.log(fruits);
for (const x of fruits.keys()) {
  console.log(x, fruits.get(x));
}
