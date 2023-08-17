import toDate from 'date-fns/toDate';
import Task from './objects.js';
import { addProjectLoad } from './addProject.js';

// const date = toDate(new Date(2014, 1, 11, 11, 30, 30));
// console.log(date);
//Add project

let addProject = document.getElementById("addProjectLink");
addProject.addEventListener("click", () =>{
    addProject.classList.add("hidden");
    addProjectLoad();

});

