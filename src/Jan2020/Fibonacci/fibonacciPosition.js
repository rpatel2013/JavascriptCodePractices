/**
 * 
 * @param {Number} n // Represent the position number of which element it should return
 */
export default function fibonacciPosition(n)
{
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;

    return Math.floor((phi ** n) / sqrt5 + 0.5); // Using Binet's Formula: https://en.wikipedia.org/wiki/Fibonacci_number
}