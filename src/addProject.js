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
    addButton.addEventListener('click', () => {
        

    });
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