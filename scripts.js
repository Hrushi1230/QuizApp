
const questions =[
    {
        question : "What is the capital of India?",
        options : ["Mumbai" , "New Delhi" , "Kolkta" ,"Bhubaneswar"],
        answer : "New Delhi"
    },
    {
        question : "What is 19 +69 =_ ?" ,
        options : ["78" , "87" , "88" , "98"],
        answer : "88"
    },
    {
        question : "What is the capital of Odisha?",
        options : ["Bhubaneswar" , "Kolkata" , "Mumbai" ,"New Delhi"],
        answer : "Bhubaneswar"
    },
    {
        question : "what is 21 -9 =_ ?",
        options : ["12" , "13" , "14" , "15"],
        answer : "12" 
    },
    {
        question : "Who is the Prime Minister of India?",
        options : ["Narendra Modi" , "Rahul Gandhi" , "Amit Shah" ,"Arvind Kejriwal"],
        answer : "Narendra Modi"
    }
];

//Dom References
 const questionContainer =document.getElementById("question-container");
 const optionsContainer = document.getElementById("option-container");
 const timerDisplay =document.getElementById("timer");
 const nextBtn =document.getElementById("next-btn");
 const resultDiv =document.getElementById("result");

 //State Variables

  let currentQuestionIndex = 0;
  let score =0;
  let hasAnswered =false;

  //Start the function

  function startQuiz() {

    currentQuestionIndex =0 ;
    score =0 ;
    resultDiv.classList.add('hide');
    nextBtn.style.display = "none";
    questionContainer.innerText = "Ready - press Next to start";
    optionsContainer.innerHTML = "";
    timerDisplay.innerText = "Time Left :_";

    nextBtn.addEventListener("click" , () =>{
         console.log("Next button clicked");
    });
  }
  startQuiz();
