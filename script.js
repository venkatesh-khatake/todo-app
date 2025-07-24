let date = document.querySelector('#date');
let newDate = new Date();
date.textContent = newDate.toDateString();

let input = document.querySelector('#input-task');
let addBtn = document.querySelector('#add-btn');

let tasks =[];

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let li = document.createElement('li');
    li.textContent = input.value;
    if(input.value === ""){
        return;
    }
    else{
 tasks.push(input.value);
    localStorage.setItem('task',JSON.stringify(tasks));

    let span = document.createElement('span');
    span.textContent = 'remove';

    li.appendChild(span);



    let taskList = document.querySelector('#task-list');
    taskList.appendChild(li)


    span.addEventListener('click',()=>{
        li.remove()
    })

    li.addEventListener('dblclick',()=>{
        li.style.textDecoration = 'line-through';
    })

    }
   
    input.value = '';
})
window.addEventListener('DOMContentLoaded', () => {
    let savedTasks = JSON.parse(localStorage.getItem('task')) || [];

    savedTasks.forEach(taskText => {
        let li = document.createElement('li');
        li.textContent = taskText;

        let span = document.createElement('span');
        span.textContent = 'remove';
        li.appendChild(span);

        span.addEventListener('click', () => {
            li.remove();
            // Remove from tasks array and update localStorage
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('task', JSON.stringify(tasks));
        });

        li.addEventListener('dblclick', () => {
            li.style.textDecoration = 'line-through';
        });

        document.querySelector('#task-list').appendChild(li);
        tasks.push(taskText); // Re-populate the array
    });
});
