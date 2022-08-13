// Edit task discription
import display from "./display.js";
import { list } from "./getelements.js";

const complete = (check,id,input) => {
  let arr = [];

  const listArrStr = localStorage.getItem("ls");
  arr = JSON.parse(listArrStr);

    if (check===true){
      input.style.textDecoration = "line-through";
      const updateTask = arr.filter((item) => {
        if (item.index === id) {
          item.complete = true;
        }
        return item;
      });
    localStorage.setItem("ls", JSON.stringify(updateTask));
    }
    else {
      input.style.textDecoration = "none";
      const updateTask = arr.filter((item) => {
        if (item.index === id) {
          item.complete = false;
        }
        return item;
      });
    localStorage.setItem("ls", JSON.stringify(updateTask));
    }
  // display();
};

export default complete;
