var size = 10;

for (var b = 1; b < size; b++) {
  if (b % 2) {
    console.log('# '.repeat(size/2));
  } else {
    console.log(' #'.repeat(size/2));
  }
}