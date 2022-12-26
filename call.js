const myDisplayer = function (profession) {
  console.log(
    `My name is ${this.name}. I am ${this.age}. I work as a ${profession}.`
  );
};

const person1 = {
  name: "Israfil",
  age: 20,
  profession: "programmer",
};

myDisplayer.call(person1, "programmer");

const person2 = {
  name: "Sophia",
  age: 17,
  profession: "singer",
  getDetail: function () {
    return `My name is ${this.name}. I am ${this.age}. I work as a ${this.profession}`;
  },
};

const details = person2.getDetail.call(person1);
console.log(details);
