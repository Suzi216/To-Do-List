import { list } from './getelements.js';
import display from './display.js';

const deleteAll = () => {
  let listArr = [];
  const listArrStr = localStorage.getItem('ls');
  listArr = JSON.parse(listArrStr);

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
  const str = '';
  list.innerHTML = str;
  display();
};

export default deleteAll;
