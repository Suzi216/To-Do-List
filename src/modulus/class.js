/* eslint-disable */
import display from './display.js';
import {  list } from './getelements.js';

export class File {
  // Add a TODO
   add = (input) => {
     let arr = [];
     const str = '';
     // add object to list
     const { value } = input;
     const newArr = JSON.parse(localStorage.getItem('ls'));
     const object = { description: value, complete: false, index: newArr.length};
     if (localStorage.getItem('ls') === null) {
       arr.push(object);
       localStorage.setItem('ls', JSON.stringify(arr));
     } else {
       const listArrStr = localStorage.getItem('ls');
       arr = JSON.parse(listArrStr);
       arr.push(object);
       localStorage.setItem('ls', JSON.stringify(arr));
     }
     list.innerHTML = str;
     display();
   };

   remove = (id) => {
     // remove object from list
     let arr = [];
     arr = JSON.parse(localStorage.getItem('ls'));
     arr.splice(id, 1);
     const update = arr.filter((n, index) => {
       if (n.index !== index) {
         n.index = index;
       }
       return arr;
     });
     localStorage.setItem('ls', JSON.stringify(update));
   };

   deleteAll = () => {
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
}
