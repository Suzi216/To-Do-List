import './style.css';
import add from './modulus/addlist.js';
import { input, list } from './modulus/getelements.js';
import remove from './modulus/remove.js';
import display from './modulus/display.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add a TODO
  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      add();
    }
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

  display();
});
