//Add a TODO
import task from './list.js';
import { input, list } from './getelements.js';


const add = () => {
    //add object to list
    let value=input.value;
    const object= { description: value, complete: false, index: task.length };
    task.push(object);
    window.localStorage.setItem('task', JSON.stringify(task));
    //display each list
    const li = document.createElement('li');
    li.classList.add('item');
    li.id= task.length-1;
    li.innerHTML = `<input type="checkbox" name="tasks" class="checkbox"> <input id=${task.length-1} type="text" class="border border-0 field" value="${value}"> <i id=${task.length-1} class="fa fa-trash " aria-hidden="true"></i> `;
    list.appendChild(li);
    window.localStorage.setItem('list', JSON.stringify(list));
};

export default add;
