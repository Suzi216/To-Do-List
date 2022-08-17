import './style.css';
import { input, list, out } from './modulus/getelements.js';
import display from './modulus/display.js';
import { File } from './modulus/class.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add a TODO
  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      const methods = new File();
      methods.add(input);
    }
  });

  // remove a TODO
  list.addEventListener('click', (e) => {
    if (e.target.matches('i')) {
      const { id } = e.target;
      const l = e.target.parentElement;
      list.removeChild(l);
      const methods = new File();
      methods.remove(id);
    }
  });

  out.addEventListener('click', () => {
    const methods = new File();
    methods.deleteAll();
  });

  display();
});
