
import "./style.css";

const m = document.getElementById('lists');

const task=[
  {
    description: "Task ",
    complete: false,
    index: 1
  },
  {
    description: "Task ",
    complete: false,
    index: 2
  },
  {
    description: "Task ",
    complete: false,
    index: 3
  },
];


const display = () =>{
  for(let i=0; i<task.length; i+=1){
    const li=document.createElement("li");
    li.classList.add("item");
    li.innerHTML=`<input type="checkbox" name="tasks" class="checkbox"> <p> ${task[i].description} ${task[i].index}</p>`
    m.appendChild(li);
  }
};
display();
