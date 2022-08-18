import {
  remove, add, edit, complete, deleteAll,
} from './mocks.js';

describe('Add/Remove tests', () => {
  test('add to list works', () => {
    const input = 'Hello there';
    expect(add(input)).toMatch('Hello there');
  });

  test('remove from list works', () => {
    const arr = [
      { description: 'marsela', complete: false, index: 0 },
    ];
    expect(remove(0)).toEqual(arr);
  });
});

describe('Editing methods test', () => {
  test('edit list', () => {
    const arr = [
      { description: 'CHANGED', complete: false, index: 0 },
      { description: 'marsela', complete: false, index: 1 },
    ];
    const descr = 'CHANGED';
    const index = 0;
    expect(edit(descr, index)).toEqual(arr);
  });
  test('update the complete status', () => {
    const arr = [
      { description: 'suzana', complete: true, index: 0 },
      { description: 'marsela', complete: false, index: 1 },
    ];
    document.body.innerHTML = '<input type="text" class="input">';
    const input = document.querySelector('.input');
    expect(complete(true, 0, input)).toEqual(arr);
  });
  test('clear all the true status lists', () => {
    const arr = [
      { description: 'tinaye', complete: false, index: 0 },
    ];
    expect(deleteAll()).toEqual(arr);
  });
});