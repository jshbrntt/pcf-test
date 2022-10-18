# PCF Test

## 03. Programming + Service Design test

### Exercise 1: Programming
Given a 2D matrix of strings as its input, write a function that traverses the matrix:

- It starts in the top-left corner, going from left to right
- It changes direction when it encounters a strings that starts with one of the following control characters:
    - `>` left to right
    - `<` right to left
    - `^` bottom to top
    - `v` top to bottom
- It prints each entry in the matrix it finds, stripped of control characters, formatted with comma-space separation.
- If it exits the matrix, it stops.
- If it reaches a spot in the matrix it has already encountered, it prints "LOOP" and stops.

The function should return a single string.

For example, given the following matrix:
```
HI  1  2  3   v4
>9  10 11 v12 13
^14 15 16 17  <18
```

The function should return the following output:
```
"HI, 1, 2, 3, 4, 13, 18, 17, 16, 15, 14, 9, 10, 11, 12, LOOP"
```

Use whichever programming language you'd like. You are also responsible for picking a data structure to represent the matrix.

How do you ensure the correctness of your solution?

### Exercise 2: API and service design
You're building a massively popular online game for mobile phones with a number of multiplayer modes. You're in charge of designing a service that will help players choose which game mode to play.

This service allows players to perform two operations:

1. The game reports the user's region and selected game mode.
2. The game queries the current most popular game modes for the region in which the player is located.

(The way in which a player selects a region is outside the scope of this test. Assume that the game client just knows what region they are in, and that regions are ISO-3166 country codes.)

Please design a REST service to support those operations. It should scale to millions of concurrent users.

Your design should include:

- REST API specification (endpoints, input parameters, output).
- Service layer design.
- Storage layer design (please explain data access patterns).
- A discussion of how your design will scale up to millions of CCUs.

Note that **a high-level design is what we're interested in – not an implementation**. Feel free to use source code snippets (in any language you like) if it
helps you illustrate some of your answers, but **please do not write the service**.

The aim of this test is for us to see how you think and design services, not how you write code.
