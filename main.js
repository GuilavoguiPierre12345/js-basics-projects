// selection des elements pivot 
const dateBox = document.querySelectorAll('.date-box h2');
const appDate = dateBox[0]; //affichage de la date
const appHeure = dateBox[1]; //affichage de l'heure

// forms elements 
let textarea = form.task; 
const submitBtn = document.getElementById('submit');

// task content element 
let taskContents = document.querySelectorAll('.task-content');
taskContents.forEach(taskContent => {
    let removeBtn = taskContent.querySelector('.remove-task-btn button');
    removeBtn.addEventListener('click',removeTask);
    
    let taskText = taskContent.querySelector('.task-text');
    taskText.addEventListener('click',updateTaskText);

});


// définition de la fonction de suppression d'une tâche
function removeTask(event) {
    let btn = event.target ;
    btn.parentElement.parentElement.remove();
}

// définition de la fonction de modification d'une tâche
function updateTaskText(event) {
    let taskText = event.target;
    let thisParentElement = taskText.parentElement ;
    // news element
    let newTextArea = document.createElement('textarea');
    newTextArea.rows = "10";
    newTextArea.textContent = taskText.innerText ;
    newTextArea.classList.add('task-text','blockResize');
    thisParentElement.replaceChild(newTextArea,taskText);
    newTextArea.focus();
    // comparaison du code de la touche à 13
    newTextArea.addEventListener('keydown',(event)=>{
        let kCode = event.which || event.keyCode;
        // console.log(typeof kCode);
        if (kCode === 13) {
            taskText.innerText = event.target.value ;
            thisParentElement.replaceChild(taskText,newTextArea);
            console.log(event.target.value);
        }
    })
}

// traitement de l'affichage de la date et del'heure 
setInterval(()=>{
    let vardate = new Date();
    let fullDate = `${vardate.getDate()}-${vardate.getMonth()+1}-${vardate.getFullYear()}`;
    appDate.innerText = fullDate;
    let fullHour = `${vardate.getHours()}:${vardate.getMinutes()}:${vardate.getSeconds()}`;
    appHeure.innerText = fullHour;
},1000);


// définition de la fonction de validation d'une tâche 
let formulaire = form;
formulaire.onsubmit = (e) => {
    e.preventDefault();
    let text = form.task.value;
    const newTask = document.createElement('div');
    newTask.classList.add('task-content');
    let newTaskContent = `
        <div class="remove-task-btn">
            <button type="button">R</button>
        </div>
        <div class="task-text" tabindex="0">
            ${text}
        </div>
    `;
    newTask.innerHTML = newTaskContent;
    if (text.length === 0) {
        document.getElementById('controlText').innerText = "veuillez saisir un text";
        document.getElementById('controlText').style.color = "red";
    }else {
        document.getElementById('controlText').innerText = "";
        document.querySelector('.validate-task').append(newTask);
        newTask.querySelector('.remove-task-btn button').addEventListener('click',removeTask);
        newTask.querySelector('.task-text').addEventListener('click',updateTaskText);
    }
    
}