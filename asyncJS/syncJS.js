function processOrder() {
  console.log("Processing Order for customer 1");

  const currentTime = new Date().getTime();
  while (new Date().getTime() <= currentTime + 3000) {}

  console.log("Processed Order for customer 1");
}

console.log("take order for customer 1");
processOrder();
console.log("complete order for customer 1");
