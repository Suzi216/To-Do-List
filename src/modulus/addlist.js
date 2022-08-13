// Add a TODO
import display from "./display.js";
import { input, list } from "./getelements.js";

const add = () => {
  let arr = [];
  let str = "";
  // add object to list
  const { value } = input;
  const newArr = JSON.parse(localStorage.getItem("ls"));
  const object = { description: value, complete: false, index: newArr.length };
  if (localStorage.getItem("ls") === null) {
    arr.push(object);
    localStorage.setItem("ls", JSON.stringify(arr));
  } else {
    const listArrStr = localStorage.getItem("ls");
    arr = JSON.parse(listArrStr);
    arr.push(object);
    localStorage.setItem("ls", JSON.stringify(arr));
  }
  list.innerHTML = str;
  display();
};

export default add;
