import toDate from 'date-fns/toDate';
import Task from './objects.js';
import { addProjectLoad } from './addProject.js';

//add project button on left pane
let addProject = document.getElementById("addProjectLink");
addProject.addEventListener("click", () =>{
    addProject.classList.add("hidden");
    addProjectLoad();

});

