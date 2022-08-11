import './style.css';
import task from './modulus/list.js';
import add from './modulus/addlist.js';
import {input, list} from './modulus/getelements.js';
import edit from './modulus/editD.js';
import remove from './modulus/remove.js';



//Add a TODO
input.addEventListener("keydown", function(e){
      if (e.keyCode === 13) {
        add();
    }
});


//Edit TODO task discription
list.addEventListener("keydown", function(e){
  if(e.target.matches('input')){
    let id= e.target.id;
      if (e.keyCode === 13) {
        edit(id);
       }
}
});

//remove a TODO
list.addEventListener("click", function(e){
  if(e.target.matches('i')){
    let id= e.target.id;
    remove(id);
}
});
