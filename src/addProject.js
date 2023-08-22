import Task from './objects.js';
import Project from './objects.js';
import { format } from 'date-fns';


export function addProjectLoad(){
   let container = document.getElementsByClassName("sidebar")[0];
   let formField = document.createElement('form'); 

   //input name form
   var titleBar = document.createElement('input');
    titleBar.setAttribute('placeholder', 'Project Name');
    titleBar.setAttribute('type', 'text');
    titleBar.setAttribute('name', 'text');
    titleBar.setAttribute('class', 'projectNameForm');
    formField.appendChild(titleBar);

    //add and cancel buttons
    let addButton = document.createElement('button');
    addButton.innerHTML = 'Add';
    addButton.setAttribute('class', 'addProjectButton');
    addButton.setAttribute('type', 'submit');
    formField.appendChild(addButton);

    //add button functionality to create p tag in side bar with title

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        let projectName = document.getElementsByClassName("projectNameForm")[0].value;
        if(projectName == ''){
            alert("Please input a valid project name.");
        }


            //create a new project object with the title input into the form
            let projectNameLink = document.createElement("p");
            projectNameLink.innerHTML = projectName;
            let projectContainerDiv = document.getElementsByClassName("projectContainer")[0];
            projectContainerDiv.appendChild(projectNameLink);

            //make the add project button re-appear then remove the project name form

            let addProject = document.getElementById("addProjectLink");
            addProject.classList.remove("hidden");
            formField.remove();
        
    });

    //cancel button functionality when a user wants to cancel putting in a project
    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.addEventListener('click', () => {
        formField.remove();
        let addProject = document.getElementById("addProjectLink");
        addProject.classList.remove("hidden");
    });
    formField.appendChild(cancelButton);
    container.appendChild(formField);
  
}

export function renderProjectTitle(projectName){
   
    const mainContentContainer = document.getElementById("mainContent");
    mainContentContainer.replaceChildren();
    let projectHeader = document.createElement('h4');
    projectHeader.innerHTML = projectName;
    mainContentContainer.appendChild(projectHeader);
}

const projectContainer = document.getElementsByClassName("projectContainer")[0];
projectContainer.addEventListener("click", (event) => {
    if(event.target.innerHTML != 'Add Project' && event.target.classList != 'projectContainer'){
        renderProjectTitle(event.target.innerHTML);
        renderAddTaskButton();
        //renderTaskForm();
    }

});

export function renderTaskForm(){
    const contentDiv = document.getElementById("mainContent");
   
    let taskForm = document.createElement('form'); 
    taskForm.classList.add("taskForm");

   var titleBar = document.createElement('input');
    titleBar.setAttribute('placeholder', 'Task Title');
    titleBar.setAttribute('type', 'text');
    titleBar.setAttribute('name', 'title');
    titleBar.setAttribute('id', 'title')
    titleBar.setAttribute('class', 'taskFormInput');
    taskForm.appendChild(titleBar);

    var description = document.createElement('textarea');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('rows', '3');
    description.setAttribute('cols', '40');
    description.setAttribute('name', 'description');
    taskForm.appendChild(description);

    var dueTimeLabel = document.createElement('label');
    dueTimeLabel.setAttribute('for', 'task-due-time');
    dueTimeLabel.innerHTML = 'Choose a due date for this task:';
    taskForm.appendChild(dueTimeLabel);

    var now = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS");
    var dueTime = document.createElement('input');
    dueTime.setAttribute('type', 'datetime-local');
    dueTime.setAttribute('name', 'task-due-time');
    dueTime.setAttribute('min', now);
    dueTime.setAttribute('max', "2025-12-31T00:00");
    taskForm.appendChild(dueTime);

    var priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.innerHTML = 'Choose a priority for this task:';
    taskForm.appendChild(priorityLabel);

    var priority = document.createElement('select');
    priority.setAttribute('name', 'priority');

    var option1 = document.createElement('option');
    option1.innerHTML = 'High';
    option1.setAttribute('value', 'High');
    priority.appendChild(option1);

    var option2 = document.createElement('option');
    option2.innerHTML = 'Medium';
    option2.setAttribute('value', 'Medium');
    priority.appendChild(option2);

    var option3 = document.createElement('option');
    option3.innerHTML = "Low";
    option3.setAttribute('value', 'Low');
    priority.appendChild(option3);

    taskForm.appendChild(priority);
    taskForm.setAttribute('id', 'taskForm');

    const addButton = document.createElement('button');
    addButton.innerHTML = 'Submit';
    addButton.setAttribute('type', 'submit');

    //Submit button submits data and renders the add task button

    addButton.addEventListener('click', () => {
        //addTask();
        taskForm.remove()
        renderAddTaskButton();
    });

    //Cancel button removes the task form and renders the add task button

    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.addEventListener('click', (event) => {
        taskForm = document.getElementById("taskForm");
        taskForm.remove();
        renderAddTaskButton();
    });

    taskForm.appendChild(addButton);
    taskForm.appendChild(cancelButton);
    contentDiv.appendChild(taskForm);
}

//Render task button renders only the task button on the dom main content container

export function renderAddTaskButton(){
     var divContainer = document.getElementById("mainContent");
     const addTask = document.createElement('button');
     addTask.innerHTML = 'Add Task';
     addTask.classList.add('addTaskButton');

     addTask.addEventListener('click',() => {
        renderTaskForm();
        addTask.remove();
     });
     divContainer.appendChild(addTask);
}