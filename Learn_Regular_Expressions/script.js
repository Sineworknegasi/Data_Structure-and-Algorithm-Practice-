let notBinary= /[^012]/;

console.log(notBinary.test("1100300010100110"));
// → false
console.log(notBinary.test("1100100010100110"));
// → true