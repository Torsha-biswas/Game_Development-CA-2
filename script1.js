const quizData = [{
    question: "What is the colour of the tree?",
    a: "Blue",
    b: "Green",
    c: "Red",
    d: "Brown",
    correct: "b",
},
{
    question: "What is the name of the game?",
    a: "MindPicturize Quiz ",
    b: "MindPicturize",
    c: "Mind Quiz ",
    d: "Picturize Quiz ",
    correct: "a",
},
{
    question: "What is the colour of the marks in the road?",
    a: "Red",
    b: "Yellow",
    c: "Green",
    d: "none of the above",
    correct: "b",
},
{
    question: "How many students have raised hands?",
    a: "6",
    b: "4",
    c: "3",
    d: "2",
    correct: "a",
},
{
    question: "How many students sitting in the chair?",
    a: "3 ",
    b: "2",
    c: "1 ",
    d: "4 ",
    correct: "d",
},
{
    question: "How many yellow colour pencils are there?",
    a: "0",
    b: "2",
    c: "1",
    d: "4",
    correct: "c",
},
{
    question: "How many chairs are there in the house?",
    a: "3 ",
    b: "2",
    c: "4 ",
    d: "5",
    correct: "a",
},
{
    question: "How many students wearing white  shirt?",
    a: "0",
    b: "4",
    c: "1",
    d: "3",
    correct: "d",
},
{
    question: "How many whiteboards are there?",
    a: "0",
    b: "4",
    c: "1",
    d: "2",
    correct: "d",
},
{
    question: "How many sofa are there in the house?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you have scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
document.addEventListener('DOMContentLoaded', function () {
    const playerNameSpan = document.getElementById('playerName');
    const playerName = localStorage.getItem('playerName');

    playerNameSpan.textContent = playerName;
    document.getElementById('exitGame').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});