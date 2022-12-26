const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking food for ${customer}`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) =>
  console.log(`Complete Order for ${customer}`);

const takeOrder = (customer, callback) => {
  console.log(`Take order for ${customer}`);
  callback(customer);
};

takeOrder("customer 1", () => {
  processOrder("customer 1", () => {
    completeOrder("customer 1");
  });
});

console.log("costomer resting");
