//Add a TODO
import task from './list.js';
import { input, list } from './getelements.js';


const add = () => {
    //add object to list
    let value=input.value;
    const object= { description: value, complete: false, index: task.length };
    task.push(object);
    //display each list
    const li = document.createElement('li');
    li.classList.add('item');
    li.id= task.length-1;
    li.innerHTML = `<input type="checkbox" name="tasks" class="checkbox"> <input id=${task.length-1} type="text" class="border border-0" value="${value}"><i id="trash" class="fa fa-trash" aria-hidden="true"></i> `;
    list.appendChild(li);
    // console.log(task);
};

export default add;
