/* eslint-disable */ 
// Edit task discription
import display from "./display.js";
import { list } from "./getelements.js";

const edit = (txtchange, id) => {
  let arr = [];
  let str = "";

  const listArrStr = localStorage.getItem("ls");
  arr = JSON.parse(listArrStr);

  const updateTask = arr.filter((item) => {
    if (item.index === id) {
      item.description = txtchange;
    }
    return item;
  });

  localStorage.setItem("ls", JSON.stringify(updateTask));

  str = "";
  list.innerHTML = str;
  display();
};

export default edit;
