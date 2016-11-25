var size = 10;
var text = "";

for (var a = 1; a < size; a++) {
  if (a % 2) {
    text += '#';
  } else {
    text += ' ';
  }
}

for (var b = 1; b < size; b++) {
  if (b % 2) {
    console.log(text);
  } else {
    console.log(' ' + text);
  }
}