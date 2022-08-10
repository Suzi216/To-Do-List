import './style.css';
import task from './list.js';


const list = document.getElementById('lists');
const input=document.querySelector(".input");

//Add a TODO
const add = () => {
    //add object to list
    let value=input.value;
    const object= { description: value, complete: false, index: task.length };
    task.push(object);
    //display each list
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<input type="checkbox" name="tasks" class="checkbox"> <p> ${value}</p> <i id="trash" class="fa fa-trash" aria-hidden="true"></i>  `;
    list.appendChild(li);
    // console.log(task);
};


input.addEventListener("keydown", function(e){
      if (e.keyCode === 13) {
        add();
    }
});


//remove a TODO
