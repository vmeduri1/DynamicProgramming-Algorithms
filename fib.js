/* Write a function 'fib(n)' that takes in a number
as an argument. The function should return the n-th number
of the Fibonacci sequence.

The 1st and 2nd number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.

n: 1, 2, 3, 4, 5, 6, 7, 8, 9, ...
fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34...

*/

// Solve recursively
// basic fib (...too slow)
const fib = (n) => {
    if (n <= 2) return 1;
    return fib (n - 1) + fib (n - 2)
}

/* 
    check notes
*/

/* memoization: 'a memo'
    Object: keys & values
    js object, keys will be arg to fn, value will be the return value
*/
const fibSolver = (n, memo= {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibSolver (n - 1, memo) + fibSolver (n - 2, memo);
    return memo[n];
}

// time complexity: O(n)
// space complexity: O(n)

console.log(fibSolver(6));
console.log(fibSolver(7));
console.log(fibSolver(8));
console.log(fibSolver(50));
