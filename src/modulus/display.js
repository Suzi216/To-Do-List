/* eslint-disable */ 
import edit from "./editD.js";
import { list } from "./getelements.js";
let arr = [];
const display = () => {
  if (localStorage.getItem("ls") === null) {
    localStorage.setItem("ls", JSON.stringify(arr));
  } else {
    arr = JSON.parse(localStorage.getItem("ls"));
  }

  arr.map((n) => {
    // display each list
    const li = document.createElement("li");
    li.classList.add("item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    const input = document.createElement("input");
    input.type = "text";
    input.value = n.description;
    input.className = "border border-0 field";
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash edit";
    deleteIcon.setAttribute("id", n.index);
    li.appendChild(checkbox);
    li.appendChild(input);
    li.appendChild(deleteIcon);
    list.appendChild(li);

    input.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        edit(input.value, n.index);
      }
    });
  });
};

export default display;
