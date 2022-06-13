# 프로그래머스 알고리즘 정리

항해 알고리즘 주차 공유문제 다시보기

## 22.06.13.

- 문제 1 ~ 문제 5

### 1. 직사각형 별찍기

- 문제설명 : 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
  별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

- 조건 : n과 m은 각각 1000 이하인 자연수입니다.

- 제시문

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(a);
  console.log(b);
});
```

- #### 접근 : 3줄 정도는 무슨 말인지 못알아먹겠지만 a가 가로 b가 세로라는 걸 어렴풋이 가늠하고 접근을 했다. 핵심은 \*을 a길이만큼 console로 찍게 한 후 그 console을 세로길이만큼의 휫수가 나와야 한다.

- #### 핵심문법 : .repeat()과 조건문

- #### 풀이

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(star);
  }
});
```
