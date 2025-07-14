const date = document.getElementById("date");

const d = new Date();
const currDate = d.toDateString();
date.innerText = currDate;

// ================================
let taskList = document.getElementById("task-list");
const addBtn = document.getElementById('add-btn');
function saveTask() {
  let inputTask = document.getElementById("input-task").value;
    taskList.innerHTML += `
      <li>${inputTask} <span id  = "remove-btn">Remove</span></li>
    `
}



addBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    saveTask();
})

const remove = document.getElementById('remove-btn');

remove.addEventListener('click',(e) =>{
  e.target.parent.remove();  
})