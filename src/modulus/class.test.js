// import {File} from './class.js';
import { remove, add } from './mocks.js';

describe('Add/Remove tests', () => {
  test('add to list works', () => {
    const input = 'Hello there';
    expect(add(input)).toMatch('Hello there');
  });
  test('multiple adds', () => {
    expect(add('Input 1')).toMatch('Input 1');
    expect(add('Input 2')).toMatch('Input 2');
    expect(add('Input 3')).toMatch('Input 3');
  });

  //
  test('remove from list works', () => {
    const arr = [
      { description: 'marsela', complete: false, index: 0 },
    ];
    expect(remove(0)).toEqual(arr);
  });
});