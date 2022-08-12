// remove a TODO
import task from './list.js';
// import { list } from './getelements.js';

const remove = (id) => {
  // remove object from list

  task.splice(id, 1);
  task=JSON.parse(localStorage.getItem("ls"));
  const update=task.filter((n,index) => {
    console.log(n);
    if(n.index!==index){
      n.index=index;
    }
    return n;
  })
  localStorage.setItem('ls', JSON.stringify(update));
  task.sort((a, b) => a.index - b.index);
};

export default remove;
