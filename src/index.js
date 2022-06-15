function solution(a, b) {
  let answer = 0;
  if (a > b) {
    for (let i = 0; i <= a - b; i++) {
      answer = a + b + (b + i);
    }
  } else {
    for (let i = 0; i <= a - b; i++) {
      answer = a + b + (a + i);
    }
  }
  console.log(answer)
}

solution(3, 4)
