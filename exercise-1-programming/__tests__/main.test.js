const { traverseGrid } = require("../src/main.js");

test("original test case", () => {
  const gridString = `
    HI  1  2  3   v4
    >9  10 11 v12 13
    ^14 15 16 17  <18
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("grid with no control characters", () => {
  const gridString = `
      HI 1  2  3  4
      9  10 11 12 13
      14 15 16 17 18
      `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("depth first walk", () => {
  const gridString = `
    vHI >1  v2  >3  v4
    9   10  11  12  13
    >14 ^15 >16 ^17 18
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("breadth first walk", () => {
  const gridString = `
    HI  1  2  3   v4
    v9  10 11 12 <13
    >14 15 16 17  18
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("spiral walk", () => {
  const gridString = `
    HI  a   b   c   d   e   f  vg
    >h  i   j   k   l   m  vn   o
    p  ^q   r   s   t   u  <v   w
    ^x  y   z   1   2   3   4  <5
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("spiral walk v character", () => {
  const gridString = `
    HI  a   b   c   d   e   f  vg
    >h  i   j   k   l   m  vn   o
    p  ^q   r   s   t   u   v   w
    ^x  y   z   1   2   3  ^4  <5
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("1x1 grid walk", () => {
  const gridString = `
    HI
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("2x2 grid walk", () => {
  const gridString = `
    HI v1
    3  <2
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("loop 2x2 grid walk", () => {
  const gridString = `
    HI v1
    ^3 <2
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("reverse 2x2 grid walk", () => {
  const gridString = `
    vHI  1
    >3  ^2
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});

test("reverse loop 2x2 grid walk", () => {
  const gridString = `
    vHI <1
    >3  ^2
    `;
  console.log(gridString);
  const path = traverseGrid(gridString);
  console.log(path);
  expect(path).toMatchSnapshot();
});
