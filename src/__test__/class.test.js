
import { remove, add } from './mocks.js';
import { File } from '../modulus/class.js'

<<<<<<< HEAD:src/modulus/class.test.js
describe('Add/Remove tests', () => {
  test('add to list works', () => {
    const input = 'Hello there';
    expect(add(input)).toMatch('Hello there');
  });
  //
  test('remove from list works', () => {
    const arr = [
      { description: 'marsela', complete: false, index: 0 },
    ];
    expect(remove(0)).toEqual(arr);
  });
=======
test('add to list works', () => {
  const input = 'Hello there';
  expect(add(input)).toMatch('Hello there');
});


test('remove from list works', () => {
  const arr = [
    { description: 'marsela', complete: false, index: 0 },
  ];
  expect(remove(0)).toEqual(arr);
>>>>>>> 4f8f3b618450b49f538fd9b0ccb3591081c597ce:src/__test__/class.test.js
});
