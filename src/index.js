import './style.css';
import task from './modulus/list.js';
import add from './modulus/addlist.js';
import {input, list} from './modulus/getelements.js';
import edit from './modulus/editD.js';

//Add a TODO
input.addEventListener("keydown", function(e){
      if (e.keyCode === 13) {
        add();
    }
});

/////////////////////////////

//Edit TODO task discription
list.addEventListener("keydown", function(e){
  if(e.target.id){
    const txtchange=document.getElementById(e.target.id);
    let id= e.target.id;
      if (e.keyCode === 13) {
        edit(txtchange,id);
       }
}
});


const remove = (rem,id) => {
   const item=document.getElementById(id);
   // console.log(item);
   item.style.display="none";

}
//remove a TODO
// const btn=document.getElementById("trash");
list.addEventListener("click", function(e){
  if(e.target.id==="trash"){
    // const rem=document.getElementById(e.target.id);
    let id= e.target.id;
    console.log(id);
    remove(id);
}
})
