import fibonacci from '../fibonacci';
import fibonacciPosition from '../fibonacciPosition';

describe('fibonacci', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(2)).toEqual([1, 1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    expect(fibonacci(11)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    expect(fibonacci(12)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
    expect(fibonacci(13)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]);
  });
});

describe('fibonacciPosition', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacciPosition(1)).toBe(1);
    expect(fibonacciPosition(2)).toBe(1);
    expect(fibonacciPosition(3)).toBe(2);
    expect(fibonacciPosition(4)).toBe(3);
    expect(fibonacciPosition(5)).toBe(5);
    expect(fibonacciPosition(6)).toBe(8);
    expect(fibonacciPosition(7)).toBe(13);
    expect(fibonacciPosition(8)).toBe(21);
    expect(fibonacciPosition(20)).toBe(6765);
    expect(fibonacciPosition(30)).toBe(832040);
    expect(fibonacciPosition(50)).toBe(12586269025);
    expect(fibonacciPosition(70)).toBe(190392490709135);
  });
});

