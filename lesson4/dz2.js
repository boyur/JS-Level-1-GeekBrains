function countBs(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 'B') {
      counter++;
    }
  }

  return counter;
}

function countChar(string, char) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counter++;
    }
  }

  return counter;
}

console.log(countBs("AdfssBBsdfBBsdfBs"));