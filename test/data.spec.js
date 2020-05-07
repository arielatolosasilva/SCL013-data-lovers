import { example, anotherExample } from '../src/data.js';


describe('filterGender', () => {
  test('is a function', () => {
    expect(typeof 'filterGender).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
