function isEven(value) {
  if (value < 0) {
    value = ~value;
  }

  if (value == 0) {
    return true;
  } else if (value == 1) {
    return false;
  } else {
    value -= 2;
    return isEven(value);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??