// 3 way switch pattern
// pattern: 1 2 1 0 1 2 1 0 1 2 1 0

// method 1
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

// method 2
const pattern2 = [];

for (let i = 0; i <= 20; i++) {
  const mod4 = i % 4;

  if (mod4 === 0 || mod4 === 2) {
    pattern2.push(mod4);
  } else if (mod4 === 1 || mod4 === 3) {
    pattern2.push(1);
  }
}

console.log(pattern2);
