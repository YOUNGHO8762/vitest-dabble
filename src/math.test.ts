import { expect, test, describe } from 'vitest';
import { sum, minus, multiply, divide } from './App';

describe('sum function tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  test('adds 100 + 200 to equal 300', () => {
    expect(sum(100, 200)).toBe(300);
  });

  test('adds -5 + 5 to equal 0', () => {
    expect(sum(-5, 5)).toBe(0);
  });
});

describe('minus function tests', () => {
  test('subtracts 2 - 1 to equal 1', () => {
    expect(minus(2, 1)).toBe(1);
  });

  test('subtracts 0 - 0 to equal 0', () => {
    expect(minus(0, 0)).toBe(0);
  });

  test('subtracts -1 - -1 to equal 0', () => {
    expect(minus(-1, -1)).toBe(0);
  });

  test('subtracts 200 - 100 to equal 100', () => {
    expect(minus(200, 100)).toBe(100);
  });

  test('subtracts 5 - -5 to equal 10', () => {
    expect(minus(5, -5)).toBe(10);
  });
});

describe('multiply function tests', () => {
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies 0 * 5 to equal 0', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  test('multiplies -1 * -1 to equal 1', () => {
    expect(multiply(-1, -1)).toBe(1);
  });

  test('multiplies 100 * 2 to equal 200', () => {
    expect(multiply(100, 2)).toBe(200);
  });

  test('multiplies -5 * 5 to equal -25', () => {
    expect(multiply(-5, 5)).toBe(-25);
  });
});

describe('divide function tests', () => {
  test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divides 0 / 5 to equal 0', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('divides -1 / -1 to equal 1', () => {
    expect(divide(-1, -1)).toBe(1);
  });

  test('divides 100 / 2 to equal 50', () => {
    expect(divide(100, 2)).toBe(50);
  });

  test('divides 5 / 0 to equal Infinity', () => {
    expect(divide(5, 0)).toBe(Infinity);
  });

  test('divides -1 / 1 to equal -1', () => {
    expect(divide(-1, 1)).toBe(-1);
  });
});
