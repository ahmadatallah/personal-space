---
title: 'Pattern Matching Example in TypeScript'
date: 2019-09-08
minRead: 5
---


In this article I will solve a problem called Pascal's Triangle using one of the pattern matching techniques used in TypeScript.
Pascal's triangle is an infinite triangle where the numbers at the edges of the triangle are all 1s,
each number inside the triangle is the sum of the two numbers above it, and each number outside the edges is zero or not exist.
I said infinite because it is increasingly growing on the limit you want it to be applied.

```tsx
/* Pascal's Triangle */

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
   ...

/* Pascal's Triangle */

```

## The problem

Defining a function that takes `row: number` and `column: number` as an arguments and
based on these argument values, it recursivly match to get our pascal value.

For example:

```tsx
pascal(1, 0);
//  expected result = 1

pascal(3, 4);
// expected result = null

pascal(3, 1);
// expected result = 3
```

## Categories

What we want exactly to pattern match four main categories:

- Left Edge: where column is equal to `0` and row is whatever.

- Right Edge: where column is equal to row.

- Beyond Edge: where column's value is bigger than row's value.

- Inside Pascal's Triangle: where the column's and row's values don't match the previous categories
  and there is a pascal value exists for these indices which, by the way, will be inside the pascal's triangle.

therefor we will create `EdgesPattern` which will define these categories:

```tsx
interface EdgesPattern {
  LeftEdge: () => number;
  RightEdge: () => number;
  BeyondEdge: () => number;
}
```

## Separation of Concerns

This interface will guarantee for us handling each case in pascal's triangle. It also allows separation of concerns;
separating behaviour of edges categorization from the actual logic of the problem we want to solve, e.g., our pascal's triangle problem.

So if we want to define `PascalTriangles` class that declare pascal's triangle logic it will be something like this:

```tsx
class PascalEdges implements EdgesPattern {
  constructor() {
    // empty constructor
  }

  LeftEdge() {
    return 1;
  }

  RightEdge() {
    return 1;
  }

  BeyondEdge() {
    return null;
  }
}
```

## Tail Recursive Pascal Function

We will use the previous class to define pascal's triangle logic.
This will be done by creating a wrapper function that takes an argument of the type `PascalEdges`, our main concern.
this function will return a function of actual logic applied to solve pascal's triangle.

```tsx
function pascal(p: PascalEdges): (row: number, column: number) => number {
  const recursePascal = (row: number, column: number): number => {
    if (column === 0) {
      return p.LeftEdge();
    } else if (column === row) {
      return p.RightEdge();
    } else if (column > row) {
      return p.BeyondEdge();
    }
    // highlight-start
    return recursePascal(column, row - 1) + recursePascal(column - 1, row - 1);
    // highlight-end
  };

  return recursePascal;
}
```

## Currying

At the end, to apply the above code blocks all together, we will use function currying to get the expected result.
For example to evaluate pascal(3, 2), we will create an instance of `PascalEdges`, pass it to the pascal wrapper
function and curry the result function to be invoked with the actual logic arguments, which will be `column` and `row` in our case.

```tsx
const pascal_3_2 = pascal(new PascalEdges())(3, 2);
// expected result = 3
```

Source code available [on Github](https://github.com/atallahsan/pascal-triangle-example)
