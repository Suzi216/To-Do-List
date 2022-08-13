import out from './getelements.js';
import display from './display.js';
import { list } from "./getelements.js";
const deleteAll = () =>{
    let listArr = [];
    const listArrStr = localStorage.getItem("ls");
    listArr = JSON.parse(listArrStr);

    for (let length = listArr.length - 1; length >= 0; length--) {
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
        console.log(updateData);
        localStorage.setItem("ls", JSON.stringify(updateData));
        const str = "";
        list.innerHTML = str;
        display();
}

export default deleteAll;
