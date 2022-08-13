import './style.css';
import add from './modulus/addlist.js';
import { input, list,out } from './modulus/getelements.js';
import remove from './modulus/remove.js';
import display from './modulus/display.js';
import deleteAll from './modulus/deleteAll';

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

  out.addEventListener('click', (e) =>{
    alert("hrfndc");
      deleteAll();
  })

console.log(out);


  // list.addEventListener('click', (e)=> {
  //   const lsts=document.querySelectorAll(".item");
  //   console.log(lsts);
  //   lsts.forEach((n) => {
  //     n.addEventListener("change", (e) =>{
  //       const lsts=document.querySelector(".checkbox");
  //       const inp=document.querySelector(".field");
  //        console.log(lsts);
  //        console.log(inp);
  //        // lsts.forEach((n) => {
  //        //
  //        // })
  //       // alert("gello");
  //       const l = e.target.parentElement;
  //       if(e.target.matches('input'))
  //         console.log(l);
  //     });
  //   })
  // });

  // list.addEventListener("change", (e) =>{
  //   let arr=[];
  //   const listArrStr = localStorage.getItem("ls");
  //   arr = JSON.parse(listArrStr);
  //   console.log(arr);
  //
  //   let chg= true;
  //   const updateTask = arr.filter((item) => {
  //     if(document.querySelector(".checkbox").checked==true){
  //       item.complete = chg;
  //     }
  //     // if (chg === true) {
  //     //   item.complete = chg;
  //     // }
  //     return item;
  //   });
  //   localStorage.setItem("ls", JSON.stringify(updateTask));
  //   // display();
  // });

  //
  // list.addEventListener("change", (e) =>{
  //
  //   const l = e.target.parentElement;
  //   // if(e.target.matches('input'))
  //     console.log(l);
  //   const lsts=document.querySelector(".checkbox");
  //   const inp=document.querySelector(".field");
  //    console.log(lsts);
  //    console.log(inp);
  //    // lsts.forEach((n) => {
  //    //
  //    // })
  //   // alert("gello");
  //
  // });

  display();
});
