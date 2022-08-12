// Edit task discription
import task from './list.js';

const edit = (txtchange, id) => {
  const vl = txtchange.value;
  task[id].description = vl;
  localStorage.setItem('ls', JSON.stringify(task));
};

export default edit;
