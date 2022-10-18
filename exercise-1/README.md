# Exercise 1: Programming

Written in JavaScript for [Node.js](https://nodejs.org/en/download/) v16.17.0.

Install dependencies with [`yarn`](https://yarnpkg.com/getting-started/install).

#### Output of `yarn start`

```shell
yarn start
yarn run v1.22.18
$ node .
Grid to be walked:
    HI  1  2  3   v4
    >9  10 11 v12 13
    ^14 15 16 17  <18
    
Path taken:
HI, 1, 2, 3, 4, 13, 18, 17, 16, 15, 14, 9, 10, 11, 12, LOOP
✨  Done in 0.37s.
```

#### Output of `yarn test`

```shell
$ yarn test
yarn run v1.22.18
$ jest
  console.log
    
        HI  1  2  3   v4
        >9  10 11 v12 13
        ^14 15 16 17  <18

      at Object.log (__tests__/main.test.js:9:11)

  console.log
    HI, 1, 2, 3, 4, 13, 18, 17, 16, 15, 14, 9, 10, 11, 12, LOOP

      at Object.log (__tests__/main.test.js:11:11)

  console.log
    
          HI 1  2  3  4
          9  10 11 12 13
          14 15 16 17 18

      at Object.log (__tests__/main.test.js:21:11)

  console.log
    HI, 1, 2, 3, 4

      at Object.log (__tests__/main.test.js:23:11)

  console.log
    
        vHI >1  v2  >3  v4
        9   10  11  12  13
        >14 ^15 >16 ^17 18

      at Object.log (__tests__/main.test.js:33:11)

  console.log
    HI, 9, 14, 15, 10, 1, 2, 11, 16, 17, 12, 3, 4, 13, 18

      at Object.log (__tests__/main.test.js:35:11)

  console.log
    
        HI  1  2  3   v4
        v9  10 11 12 <13
        >14 15 16 17  18

      at Object.log (__tests__/main.test.js:45:11)

  console.log
    HI, 1, 2, 3, 4, 13, 12, 11, 10, 9, 14, 15, 16, 17, 18

      at Object.log (__tests__/main.test.js:47:11)

  console.log
    
        HI  a   b   c   d   e   f  vg
        >h  i   j   k   l   m  vn   o
        p  ^q   r   s   t   u  <v   w
        ^x  y   z   1   2   3   4  <5

      at Object.log (__tests__/main.test.js:58:11)

  console.log
    HI, a, b, c, d, e, f, g, o, w, 5, 4, 3, 2, 1, z, y, x, p, h, i, j, k, l, m, n, v, u, t, s, r, q, LOOP

      at Object.log (__tests__/main.test.js:60:11)

  console.log
    
        HI  a   b   c   d   e   f  vg
        >h  i   j   k   l   m  vn   o
        p  ^q   r   s   t   u   v   w
        ^x  y   z   1   2   3  ^4  <5

      at Object.log (__tests__/main.test.js:71:11)

  console.log
    HI, a, b, c, d, e, f, g, o, w, 5, 4, v, n, LOOP

      at Object.log (__tests__/main.test.js:73:11)

  console.log
    
        HI

      at Object.log (__tests__/main.test.js:81:11)

  console.log
    HI

      at Object.log (__tests__/main.test.js:83:11)

  console.log
    
        HI v1
        3  <2

      at Object.log (__tests__/main.test.js:92:11)

  console.log
    HI, 1, 2, 3

      at Object.log (__tests__/main.test.js:94:11)

  console.log
    
        HI v1
        ^3 <2

      at Object.log (__tests__/main.test.js:103:11)

  console.log
    HI, 1, 2, 3, LOOP

      at Object.log (__tests__/main.test.js:105:11)

  console.log
    
        vHI  1
        >3  ^2

      at Object.log (__tests__/main.test.js:114:11)

  console.log
    HI, 3, 2, 1

      at Object.log (__tests__/main.test.js:116:11)

  console.log
    
        vHI <1
        >3  ^2

      at Object.log (__tests__/main.test.js:125:11)

  console.log
    HI, 3, 2, 1, LOOP

      at Object.log (__tests__/main.test.js:127:11)

 PASS  __tests__/main.test.js
  ✓ original test case (27 ms)
  ✓ grid with no control characters (4 ms)
  ✓ depth first walk (2 ms)
  ✓ breadth first walk (2 ms)
  ✓ spiral walk (3 ms)
  ✓ spiral walk v character (2 ms)
  ✓ 1x1 grid walk (4 ms)
  ✓ 2x2 grid walk (3 ms)
  ✓ loop 2x2 grid walk (3 ms)
  ✓ reverse 2x2 grid walk (2 ms)
  ✓ reverse loop 2x2 grid walk (3 ms)

Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   11 passed, 11 total
Time:        0.391 s, estimated 1 s
Ran all test suites.
✨  Done in 1.31s.
```
