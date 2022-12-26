// implicit binding
// explicit binding
// new binding
// window binding

const printAgeFunction = (obj) => {
  obj.printAge = function () {
    console.log(this.age);
  };
};

const person = {
  name: "Israfil",
  age: 20,
  details: function () {
    console.log(`${this.name}`);
  },
};

const person2 = {
  name: "Sophia",
  age: 17,
};

printAgeFunction(person);
printAgeFunction(person2);

person.details();
person.printAge();
person2.printAge();

const person3 = {
  name: "Carolina",
  age: 20,
  details() {
    return "name: " + this.name + " age: " + this.age;
  },
};

console.log(person3.details());
