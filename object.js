{
  const person = {
    firstName: "Israfil",
    lastName: "Mallick",
    isDev: true,
    salary: 3000,
    height: 5.7,
  };

  let firstName = person.firstName;
  let lastName = person.lastName;
  let salary = person.salary;

  console.log(firstName);
  console.log(lastName);
  console.log(salary);
}
{
  const person = {
    firstName: "Alyssa",
    lastName: "Carson",
    age: 23,
    height: 5.7,
    eyeColor: 5,
  };

  console.log(person.firstName);
  console.log(person["lastName"]);

  person.firstName = "Israfil";
  person["lastName"] = "Mallick";
  console.log(person.firstName);
  console.log(person.lastName);
}
{
  let person = {
    firstName: "Israfil",
    lastName: "Mallick",
    age: 20,
    getDetail: function () {
      return (
        "My name is " +
        this.firstName +
        " " +
        this.lastName +
        " I am " +
        this.age
      );
    },
  };
  console.log(person.getDetail());
}
