
const questions =[
    {
        question : "What is the capital of India?",
        options : ["Mumbai" , "New Delhi" , "Kolkta" ,"Bhubaneswar"],
        answer : "New Delhi",
        time :12
    },
    {
        question : "What is 19 +69 =_ ?" ,
        options : ["78" , "87" , "88" , "98"],
        answer : "88",
        time :12
    },
    {
        question : "What is the capital of Odisha?",
        options : ["Bhubaneswar" , "Kolkata" , "Mumbai" ,"New Delhi"],
        answer : "Bhubaneswar",
        time :12
    },
    {
        question : "what is 21 -9 =_ ?",
        options : ["12" , "13" , "14" , "15"],
        answer : "12" ,
        time :12
    },
    {
        question : "Who is the Prime Minister of India?",
        options : ["Narendra Modi" , "Rahul Gandhi" , "Amit Shah" ,"Arvind Kejriwal"],
        answer : "Narendra Modi",
        time :12
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
  let timerId= null;
  let remainingTime =0;

  //Start the function

  function startQuiz() {
    startTimer();

    currentQuestionIndex =0 ;
    score =0 ;
    resultDiv.classList.add('hide');
    nextBtn.style.display = "none";
    showQuestion();
  }

  function showQuestion(){
    stopTimer();
    hasAnswered =false;
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
    nextBtn.style.display ="none";
    remainingTime = q.time;
    timerDisplay.textContent = `Time Left : ${remainingTime}s`;
    startTimer();
   }
   //timer logic 
   function startTimer(){
    stopTimer(); // Clear any existing timer
    timerId =setInterval(() =>{
        remainingTime--;
        timerDisplay.textContent =`Time Left : ${remainingTime}s`;
        if(remainingTime <= 0){
          stopTimer();
          onTimeout();
        }
    }, 1000);
   }

   function stopTimer(){
     if(timerId){
        clearInterval(timerId);
        timerId =null;
     }
   }

   function onTimeout(){
    hasAnswered =true;
    nextQuestion();
   }


  //handle option click via event delegation
    optionsContainer.addEventListener("click" ,(e) =>{
        if(hasAnswered) return;
        const chosenText =e.target.textContent;
        const correctAnswer = questions[currentQuestionIndex].answer;

        hasAnswered = true;
        
        if(chosenText === correctAnswer){
            score += 10;
            e.target.style.backgroundColor = "green";
        }
        else {
            e.target.style.backgroundColor = "red";
        }
        nextBtn.style.display = 'inline-block';
    });
    //Next Question Logic

    function nextQuestion(){
        currentQuestionIndex++;
        if(currentQuestionIndex >= questions.length){
            showResult();
        }
        else{
            showQuestion();
        }
    }
    //show result logic

    function showResult(){
        stopTimer();
        questionContainer.classList.add('hide');
        optionsContainer.classList.add('hide');
        timerDisplay.classList.add('hide');
        resultDiv.classList.remove('hide');
        resultDiv.innerText = `Your score is ${score} out of 50`;
        nextBtn.style.display ='none';
    }


    nextBtn.addEventListener("click" ,nextQuestion);

startQuiz();