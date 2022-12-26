function processOrder() {
  console.log("Processing order for customer 1");
  setTimeout(() => {
    // code executing after 3s
  }, 3000);
  console.log("Processed order for customer 1");
}

console.log("Take order for customer 1");
processOrder();
console.log("complete order for customer 1");
