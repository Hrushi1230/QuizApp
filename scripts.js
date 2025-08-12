
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
    showQuestion();
  }

  function showQuestion(){
    const q =questions[currentQuestionIndex];
    questionContainer.innerText = q.question;
    optionsContainer.innerHTML ="";

    q.options.forEach((option ,index) =>{
        const btn = document.createElement("button");
        btn.type ="button";
        btn.className ="option-btn";
        btn.textContent = option;
        btn.dataset.index =index;
        optionsContainer.appendChild(btn);
        //optionContainer is parent and btn is child
    })

    timerDisplay.textContent = "Time Left :_ ";

  }
  startQuiz();