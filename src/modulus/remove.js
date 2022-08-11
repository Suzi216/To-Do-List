//remove a TODO
import task from './list.js';
import {list} from './getelements.js';

const remove = (id) => {
  // remove object from list
   task.splice(id, 1);
   window.localStorage.setItem('task', JSON.stringify(task));
//remove list from display
   list.removeChild(list.children[id]);
  //reset the indexes
   task.forEach((e, i) => e.index = i);
   console.log(task);
}

export default remove;
