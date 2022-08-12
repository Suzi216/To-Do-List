import './style.css';
// import task from './modulus/list.js';
import add from './modulus/addlist.js';
import { input, list } from './modulus/getelements.js';
import edit from './modulus/editD.js';
import remove from './modulus/remove.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add a TODO
  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      add();
    }
  });

  // Edit TODO task discription
  list.addEventListener('keydown', (e) => {
    // if(e.target.id){
    if (e.keyCode === 13) {
      const txtchange = document.getElementById(e.target.id);
      const { id } = e.target;
      edit(txtchange, id);
    }
  // }
  });

  // remove a TODO
  list.addEventListener('click', (e) => {
    if (e.target.matches('i')) {
      const { id } = e.target;
      const l = e.target.parentElement;
      list.removeChild(l);
      remove(id);
    }
  });
});
