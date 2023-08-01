const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearTask = document.querySelector('.clear-tasks');


// const addTask = document.querySelector('#add-task');
const filterInput = document.querySelector('#filter');
// const collection = document.querySelector('.collection');

//LOAD ALL EVENTS LISTENERs 
loadEventListeners();

function loadEventListeners() {
    //Add task Event
    form.addEventListener('submit', addTask);
}


//Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task')
    }

    //Create li element
    const li = document.createElement('li');
    //Add Class
    li.classList = 'collection-item';
    //Create Text-Node and Append to li
    li.appendChild(document.createTextNode(taskInput.value));
    
    //Create New Link Element
    const link = document.createElement('a');
    //Add Class 
    link.classList = 'delete-item secondary-content';
    //Add Icon Html
    link.innerHTML = '<i class="fa fa-remove>"</i>';
    //Append the link to li
    li.appendChild('link');
    //Append li to ul
    taskList.appendChild('li');
    //Clear Input
    taskInput.value = '';



    

    
    e.preventDefault();
    

    
}
// console.log(li);