// 3 way switch pattern
// pattern: 1 2 1 0 1 2 1 0 1 2 1 0
const pattern = [];
let loop = 1;
for (let i = 0; i <= 20; i++) {
  const isEven = i % 2 === 0;

  if (isEven) {
    pattern.push(1);
  } else {
    if (i % (4 * loop - 3) === 0) {
      pattern.push(2);
      loop++;
    } else {
      pattern.push(0);
    }
  }
}

console.log(pattern);
