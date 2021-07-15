const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');

var message =
  'Your Time is up. Please try next time';
var words = message.split(' ');
console.log(message);
// Timer that counts down from 50
function countdown() {
  var timeLeft = 50;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft
    timeLeft--;
   if (timeLeft<0){
     timerEl.textContent ="";
     clearInterval(timeInterval);
     displayMessage();
   }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
console.log('Started')
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionIndex=0

setNextQuestion()


}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
questionElement.innerText=question.question

question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState(){
    
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
   if (shuffledQuestions.length > currentQuestionIndex + 1){
       nextButton.classList.remove('hide')
   }else{
       startButton.innerText = 'Restart'
       startButton.classList.remove('hide')
   }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')    
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




const questions=[
{
    question: 'What is Javascript ?',
    answer: [
        {text: 'A programming Language', correct: true},
        {text:'A software', correct: false},
        {text:'An anti-virus', correct: false},
        {text:'None of the above', correct: false}
    ]
},
{
    question: 'What is DOM stands for in Javascript ?',
    answer: [
        {text: 'Data Object Model', correct: false},
        {text:'Daily Object Module', correct: false},
        {text:'Document Object Model', correct: true},
        {text:'None of the above', correct: false}
    ]
},
{
    question: 'What is Bootstrap ?',
    answer: [
        {text: 'An independent programming language', correct: false},
        {text:'a part of HTML', correct: false},
        {text:'Is non-responsive to develop', correct: false},
        {text:'A CSS framework', correct: true}
    ]
},
{
    question: 'What is Function in Javascript ?',
    answer: [
        {text: 'An object', correct: false},
        {text:'A pre-defined action', correct: true},
        {text:'A variable', correct: false},
        {text:'All of the above', correct: false}
    ]
},
{
    question: 'What is CSS selector ?',
    answer: [
        {text: 'A programming Language', correct: false},
        {text:'An object', correct: false},
        {text:'An HTML element', correct: true},
        {text:'None of the above', correct: false}
    ]
}


]

/*var startBtn = document.getElementById("#startQuizbtn");
var timerDisplay = document.getElementById("#finalTime");
var scoreDisplay = document.getElementById("#finalScore");
var score=0;
var time=0;
var timeRemaining=0;


// write down the questions
var questions = [
    {
        question: "What is DOM stands for in Javascript ?\n(a) Data Object Model\n\
        (b) Document Object Model \n (c) Document Observation Model \n (d) None of the above",
        answer: "b"
    },
    {
        question: "What is Javascript ?\n(a) A programming Language\n\
        (b) A software \n (c) An anti-virus \n (d) None of the above",
        answer: "a"
    },
];

function displayQuestions(){

}

for (var i=0; i<questions.length; i++){
    var answer = confirm(questions[i].question);
    if (response = questions[i].answer){
        score++
        alert("Your answer is correct");
    }else{
        alert ("Your answer is wrong");
    }
}
*/

