import { input, list } from './getelements.js';
let arr=[];
const display =()=> {
  if(localStorage.getItem("ls")===null){
    localStorage.setItem("ls", JSON.stringify(arr));
  }
  else{
    arr=JSON.parse(localStorage.getItem("ls"));
  }
  arr.map(n => {
    // display each list
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<input type="checkbox" name="tasks" class="checkbox"> <input id=${n.length - 1} type="text" class="border border-0 field" value="${n.description}"> <i id=${n.length - 1} class="fa fa-trash edit" aria-hidden="true"></i> `;
    list.appendChild(li);
   })
}

export default display;
