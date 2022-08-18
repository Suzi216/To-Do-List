import { remove, add, edit } from './mocks.js';

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


  test("edit list", () =>{
    let arr = [
      { description: 'CHANGED', complete: false, index: 0 },
      { description: 'marsela', complete: false, index: 1 },
    ];
    const descr="CHANGED";
    const index=0;
    expect(edit(descr,index)).toEqual(arr);
  });
