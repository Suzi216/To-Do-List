// Edit task discription
// import task from './list.js';
import display from './display.js';


const edit = (txtchange, id) => {
  let task=[];
  const vl = txtchange.value;
  // task[id].description = vl;
 task=JSON.parse(localStorage.getItem("ls"));
 // task=localStorage
 console.log(vl);
  const update=task.filter(n => {
    console.log(n);
    if(n.index===id){
      n.description=vl;
    }
  })
  localStorage.setItem('ls', JSON.stringify(update));
  // display();
};

export default edit;
