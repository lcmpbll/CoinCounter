import { coinCounter } from '../src/js/part2.js';

describe('part2', () => {
  test('should return correct string with 1 penny', () => {
    expect(coinCounter(0.01)).toEqual(
      'Your change is 0 in quarters, 0 in dimes, 0 in nickles, and 1 in pennies'
    );
  });

  test('should return correct string with 1 nickle', () => {
    expect(coinCounter(0.05)).toEqual(
      'Your change is 0 in quarters, 0 in dimes, 1 in nickles, and 0 in pennies'
    );
  });

  test('should return correct string with 1 dime', () => {
    expect(coinCounter(0.1)).toEqual(
      'Your change is 0 in quarters, 1 in dimes, 0 in nickles, and 0 in pennies'
    );
  });

  test('should return correct string with 1 quarter', () => {
    expect(coinCounter(0.25)).toEqual(
      'Your change is 1 in quarters, 0 in dimes, 0 in nickles, and 0 in pennies'
    );
  });

  test('should return correct string with 1 penny 1 nickle', () => {
    expect(coinCounter(0.06)).toEqual(
      'Your change is 0 in quarters, 0 in dimes, 1 in nickles, and 1 in pennies'
    );
  });

  test('should return correct string with 1 quarter 2 dimes 4 penny', () => {
    expect(coinCounter(0.49)).toEqual(
      'Your change is 1 in quarters, 2 in dimes, 0 in nickles, and 4 in pennies'
    );
  });

  test('should return correct string with 41 quarter 1 dimes, 1 nickle 4 penny', () => {
    expect(coinCounter(10.44)).toEqual(
      'Your change is 41 in quarters, 1 in dimes, 1 in nickles, and 4 in pennies'
    );
  });
});
