// Add a TODO
import task from './list.js';
import { input, list } from './getelements.js';

const add = () => {
  // add object to list
  const { value } = input;
  const object = { description: value, complete: false, index: task.length };
  if (localStorage.getItem('ls') === null) {
    task.push(object);
    localStorage.setItem('ls', JSON.stringify(task));
  } else {
    task.push(object);
    localStorage.setItem('ls', JSON.stringify(task));
  }
  // display each list
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `<input type="checkbox" name="tasks" class="checkbox"> <input id=${task.length - 1} type="text" class="border border-0 field" value="${value}"> <i id=${task.length - 1} class="fa fa-trash edit" aria-hidden="true"></i> `;
  list.appendChild(li);
  window.localStorage.setItem('list', JSON.stringify(list));
};

export default add;
