//Edit task discription
import task from './list.js';

const edit = (id) =>{
  const txtchange=document.getElementById(id);
  const vl=txtchange.value;
  task[id].description=vl;
  console.log(task);
}

export default edit;
