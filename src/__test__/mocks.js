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

// Edit a TODO
export const edit = (txtchange, id) => {
  let arr = [
    { description: 'suzana', complete: false, index: 0 },
    { description: 'marsela', complete: false, index: 1 },
  ];
  localStorage.setItem('ls', JSON.stringify(arr));
  const listArrStr = localStorage.getItem('ls');
  arr = JSON.parse(listArrStr);

  const updateTask = arr.filter((item) => {
    if (item.index === id) {
      item.description = txtchange;
    }
    return item;
  });

  localStorage.setItem('ls', JSON.stringify(updateTask));
  return arr;
};

// Update DOTO complete status
export const complete = (check, id, input) => {
  let arr = [
    { description: 'suzana', complete: false, index: 0 },
    { description: 'marsela', complete: false, index: 1 },
  ];
  localStorage.setItem('ls', JSON.stringify(arr));
  const listArrStr = localStorage.getItem('ls');
  arr = JSON.parse(listArrStr);

  if (check === true) {
    input.style.textDecoration = 'line-through';
    const updateTask = arr.filter((item) => {
      if (item.index === id) {
        item.complete = true;
      }
      return item;
    });
    localStorage.setItem('ls', JSON.stringify(updateTask));
  }
  return arr;
};

export const deleteAll = () => {
  const arr = [
    { description: 'suzana', complete: true, index: 0 },
    { description: 'marsela', complete: true, index: 1 },
    { description: 'tinaye', complete: false, index: 2 },
  ];
  localStorage.setItem('ls', JSON.stringify(arr));
  const listArrStr = localStorage.getItem('ls');
  const listArr = JSON.parse(listArrStr);

  for (let length = listArr.length - 1; length >= 0; length -= 1) {
    if (listArr[length].complete === true) {
      listArr.splice(length, 1);
    }
  }
  // Updated index
  const updateData = listArr.filter((updatedIndex, index) => {
    if (updatedIndex.index !== index) {
      updatedIndex.index = index;
    }
    return updatedIndex;
  });
  localStorage.setItem('ls', JSON.stringify(updateData));

  return updateData;
};
