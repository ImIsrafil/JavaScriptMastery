// Creating new Date Object
{
  const date = new Date("Tue Dec 20 2022 15:20:25");
  console.log(date);
}
{
  const date = new Date(2018, 0, 21, 10, 29, 30, 200);
  console.log(date.toString());
  console.log(date.toDateString());
  console.log(date.toUTCString());
  console.log(date.toISOString());
}
