// ReMOVE TODO
export const remove = (id) => {
  // remove object from list
  let arr = [
    { description: 'suzana', complete: false, index: 0 },
    { description: 'marsela', complete: false, index: 1 },
  ];
  localStorage.setItem('ls', JSON.stringify(arr));
  arr = JSON.parse(localStorage.getItem('ls'));
  arr.splice(id, 1);
  arr.filter((n, index) => {
    if (n.index !== index) {
      n.index = index;
    }
    return n;
  });
  localStorage.setItem('ls', JSON.stringify(arr));
  return arr;
};

// Add a TODO
export const add = (input) => {
  let arr = [];
  // add object to list
  const value = input;
  const object = { description: value, complete: false, index: 0 };
  if (localStorage.getItem('ls') === null) {
    arr.push(object);
    localStorage.setItem('ls', JSON.stringify(arr));
  } else {
    const listArrStr = localStorage.getItem('ls');
    arr = JSON.parse(listArrStr);
    arr.push(object);
    localStorage.setItem('ls', JSON.stringify(arr));
  }
  return arr[0].description;
};
