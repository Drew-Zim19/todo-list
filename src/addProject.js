import Project from './objects.js';

export function addProjectLoad(){
   let container = document.getElementsByClassName("sidebar")[0];
   let formField = document.createElement('form'); 

   //input name form
   var nameBar = document.createElement('input');
    nameBar.setAttribute('placeholder', 'Project Name');
    nameBar.setAttribute('type', 'text');
    nameBar.setAttribute('name', 'text');
    nameBar.setAttribute('class', 'projectNameForm');
    formField.appendChild(nameBar);

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
    }

});