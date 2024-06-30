document.addEventListener("DOMContentLoaded",loadQuiz);


const data =[
    {
        question : "Who is making the web standards ?",
        a : "Google",
        b : "Microsoft",
        c : "Mozilla",
        d : "The world wide web Consortium",
        correct : "d",
    },
    {
        question : "Choose the correct HTML element for the largest heading",
        a : "<head>",
        b : "<heading>",
        c : "<h1>",
        d : "<h6>",
        correct : "c",
    },
    {
        question : "What does CSS stand for ?",
        a : "Central Style Sheets",
        b : "Cascading Style Sheets",
        c : "Cascading Simple Sheets",
        d : "Cars SUV Sailboats",
        correct : "b",
    },
    {
        question : "What does HTML stand for ?",
        a : "Hypertext Markup Language",
        b : "Hypertext Markdown Language",
        c : "Hyperloop Machine Language",
        d : "Helicopters Terminals Motoboats Lamborginis",
        correct : "a",
    },
    {
        question : "What does HTML stand for ?",
        a : "Hypertext Markup Language",
        b : "Hypertext Markdown Language",
        c : "Hyperloop Machine Language",
        d : "Helicopters Terminals Motoboats Lamborginis",
        correct : "a",
    },
];

// sélection du container avec id quiz
const quiz = document.getElementById("quiz");

// sélection des élements de reponse
const answerEles = document.querySelectorAll(".answer");

// sélection de la balise de question
const questionEl = document.getElementById("question");

// sélection des options 
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

// sélection du bouton de soumission
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// la function de démarrage du quiz
function loadQuiz() {
    // appel à la fonction de déselection des reponses
    deselectAnswers();

    const currentQuizData = data[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    optionA.innerText = currentQuizData.a;

    optionB.innerText = currentQuizData.b;

    optionC.innerText = currentQuizData.c;

    optionD.innerText = currentQuizData.d;

}

// la fonction de déselection des reponses
function deselectAnswers(){
    answerEles.forEach((answerEl) => {
        answerEl.checked=false;
    })
}

// la fonction qui permet d'obternir la réponse du joueur
function getSelected(){
    let answer;

    answerEles.forEach
    ((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitbtn.addEventListener("click",() => {
    const chooseAnswer = document.getElementById("chooseAnswer");
    
    const answer = getSelected();

    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < data.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${data.length} Questions Correctly</h2>
                <button onclick="location.reload()">Do it Again</button>
            `;
        }
        chooseAnswer.innerText = "";
    } else {
        chooseAnswer.innerText = "Please choose an answer !";
    }
})

