//Edit task discription
import task from './list.js';

const edit = (txtchange,id) =>{
  let vl=txtchange.value;
  task[id].description=vl;
  // console.log(task);

}

export default edit;
