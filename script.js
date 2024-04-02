const questions = [
    {
        question:  "HTML stands for -" ,
        answers: [
            { text: "HighText Machine Language" , correct: false},
            { text: "HyperText and links Markup Language" , correct: false},
            { text: "HyperText Markup Language" , correct: true},
            { text: "None of these" , correct: false},
        ]
    },
    {
        question:  "The correct sequence of HTML tags for starting a webpage is -" ,
        answers: [
        { text: "Head, Title, HTML, body" , correct: false},
        { text: "HTML, Body, Title, Head" , correct: false},
        { text: "HTML, Head, Title, Body" , correct: false},
        { text: "HTML, Head, Title, Body" , correct: true},
    ]
 },
 {
    question:  "Which of the following element is responsible for making the text bold in HTML?" ,
    answers: [
        { text: "pre" , correct: false},
        { text: "a" , correct: false},
        { text: "b" , correct: true},
        { text: "br" , correct: false},
    ]
 },
 {
    question:  "Which of the following tag is used for inserting the largest heading in HTML?" ,
    answers: [
        { text: "h3" , correct: false},
        { text: "h1" , correct: true},
        { text: "h5" , correct: false},
        { text: "h6" , correct: false},
    ]
 },
 {
    question:  "Which of the following HTML attribute is used to define inline styles?" ,
    answers: [
        { text: "style" , correct: true},
        { text: "type" , correct: false},
        { text: "class" , correct: false},
        { text: "None of the above" , correct: false},
    ]
 },
 {
    question:  "Which of the following tag is used to insert a line-break in HTML?" ,
    answers: [
        { text: "br" , correct: true},
        { text: "a" , correct: false},
        { text: "pre" , correct: false},
        { text: "b" , correct: false},
    ]
 },
 {
    question:  "How to create an unordered list (a list with the list items in bullets) in HTML?" ,
    answers: [
        { text: "ul" , correct: true},
        { text: "ol" , correct: false},
        { text: "li" , correct: false},
        { text: "i" , correct: false},
    ]
 },
 {
    question:  "How to create an ordered list (a list with the list items in numbers) in HTML?" ,
    answers: [
        { text: "ul" , correct: false},
        { text: "ol" , correct: true},
        { text: "li" , correct: false},
        { text: "i" , correct: false},
    ]
 },
 {
    question:  "Which of the following element is responsible for making the text italic in HTML?" ,
    answers: [
        { text: "i" , correct: true},
        { text: "italic" , correct: false},
        { text: "it" , correct: false},
        { text: "pre" , correct: false},
    ]
 },
 {
    question:  "Which of the following tag is used to define options in a drop-down selection list?" ,
    answers: [
        { text: "select" , correct: false},
        { text: "list" , correct: false},
        { text: "dropdown", correct: false},
        { text: "option" , correct: true},
    ]
 },
 {
    question:  "Which of the following tag is used to add rows in the table?" ,
    answers: [
        { text: "td and /td" , correct: false},
        { text: "th and /th" , correct: false},
        { text: "tr and /tr" , correct: true},
        { text: "None of the above" , correct: false},
    ]
 },
 {
    question:  " The <hr> tag in HTML is used for -" ,
    answers: [
        { text: "new line" , correct: false},
        { text: "vertical ruler" , correct: false},
        { text: "new paragraph" , correct: false},
        { text: "horizontal ruler" , correct: true},
    ]
 }
]; 
 
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
 
let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
 
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
 
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
 
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}
 
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});
 
startQuiz();
