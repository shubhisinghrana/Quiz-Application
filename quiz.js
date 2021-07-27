const quizDB=[{question:"1.what is capital of india?",
a:"delhi",
b:"pune",
c:"banglore",
d:"mumbai",
answer:"ans1"},

{question:"2.what is capital of america?",
a:"New Orleans",
b:"washington",
c:"New York",
d:"Chicago",
answer:"ans2"},

{question:"3.what is capital of germany?"
,a:"berlin",
b:"munich",
c:"hamburg",
d:"leipzig",
answer:"ans1"},

{question:"4.what is capital of china?"
,a:"Lhasa",
b:"Beijing",
c:"Shanghai",
d:"Hong Kong",
answer:"ans2"},

{question:"5.what is capital of britain?"
,a:"London",
b:"Manchester",
c:"Glasgow",
d:"Liverpool",
answer:"ans1"},
];
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");

const answers=document.querySelectorAll(".answer");

const showScore=document.querySelector("#showScore");
let quesCount=0;
let score=0;
const loadQuestion=function(){
    quesList=quizDB[quesCount];
    question.innerText=quesList.question;
    option1.innerText=quesList.a;
    option2.innerText=quesList.b;
    option3.innerText=quesList.c;
    option4.innerText=quesList.d;
}
loadQuestion();
const getCheckAnswer=()=>{
let answer;
answers.forEach((curAnsElem)=>{
    if(curAnsElem.checked)
    {
     answer=curAnsElem.id;
    }
    
});
return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElement)=>curAnsElement.checked=false)
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[quesCount].answer)
    {
        score++;
    };
    quesCount++;
    deselectAll();
    if(quesCount<quizDB.length)
    {
        loadQuestion();
    }
    else{
        showScore.innerHTML=`<h3>your score is ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">play again</button>`;

        showScore.classList.remove("scoreArea");
    }
});
