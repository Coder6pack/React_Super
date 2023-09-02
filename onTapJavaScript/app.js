const num = {
  a: 1,
  b: 2,
  c: 3,
};

const value = { ...num };
value.a = 5;
console.log(value.a + " " + num.a);
