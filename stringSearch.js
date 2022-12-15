// JavaScript String Search
// indexOf()
// lastIndexOf()
// search()
// match()
// matchAll()
// includes()
// startsWith()
// endsWith()
{
  //JavaScript indexOf()
  let str = "let search where is 'locate' occurs";
  let index = str.indexOf("locate");
  console.log(index);
}
{
  // JavaScript lastIndexOf()
  let str = "let's search where is 'locate' occurs";
  let lastIndex = str.lastIndexOf("locate");
  console.log(lastIndex);

  let noneMatch = str.lastIndexOf("find");
  console.log(noneMatch);
}
{
  let str = "let's search where is 'locate' occurs";
  let strIn = str.search("locate");
  console.log(strIn);
}
