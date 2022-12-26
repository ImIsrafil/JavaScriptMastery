{
  const letters = new Set(["a", "b", "c"]);
  console.log(letters);
}
{
  const letters = new Set();
  letters.add("a");
  letters.add("b");
  letters.add("c");
  console.log(letters);
  letters.add("c");
  letters.add("d");
  letters.add("d");
  letters.add("e");
  console.log(letters);
  console.log(letters.size);

  for (const x of letters.values()) {
    console.log(x);
  }
}
