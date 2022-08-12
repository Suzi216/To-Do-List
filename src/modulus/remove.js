// remove a TODO
import task from './list.js';
// import { list } from './getelements.js';

const remove = (id) => {
  // remove object from list
  task.splice(id, 1);
  localStorage.setItem('ls', JSON.stringify(task));
  task.sort((a, b) => a.index - b.index);
};

export default remove;
