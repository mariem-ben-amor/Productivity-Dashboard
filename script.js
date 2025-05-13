//To do Liste
const inputBox=document.getElementById('inputBox');
const listContainer=document.getElementById('list-container');
const taskToDo=document.getElementById("taskTodo");
function addTodo(){
  if(inputBox.value ===''){
    alert("You must write something!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData();
}
listContainer.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  
  }
},false);

function saveData(){
 localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
listContainer.innerHTML=localStorage.getItem("data");   
}
showTask();
//Pomodoro Timer

let time1= 25*60;
let time2= 5*60;

let Timer25=document.getElementById("timer-25");
let Timer05=document.getElementById("timer-05");
function StartTimer25(){
    Interval25=setInterval(function(){
    let min=  Math.floor(time1/60);
    let sec= time1 % 60;
    sec=sec <10? "0" +sec :sec;
    Timer25.innerHTML= min +":"+sec;
    time1--;
    if (time1 === 0) {
    clearInterval(Interval25);
    Timer25.innerHTML="Time's up!";

   }},1000);

}
function ResetTimer1() {
    clearInterval(Interval25);  
    time1 = 25*60;             
    Timer25.innerHTML="00:00";
}
function StartTimer05(){
    Interval05=setInterval(function(){
    let min=  Math.floor(time2/60);
    let sec= time2 % 60;
    sec=sec <10? "0" +sec :sec;
    Timer05.innerHTML= min +":"+sec;
    time2--;
    if (time2 === 0) {
   clearInterval(Interval05);
    Timer05.innerHTML="Time's up!";

   }},1000);

}
function ResetTimer2() {
    clearInterval(Interval05); 
    time2 = 5*60;              
    Timer05.innerHTML="00:00";
}

// Add and copy Quote 
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://quotes-api-self.vercel.app/quote";
let tooltip = document.getElementById("myTooltip");

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.quote ;
    author.innerHTML = data.author ;
    tooltip.innerHTML = "Copy to clipboard" ;
}

getquote(api_url);

function copyQuote(){

  navigator.clipboard.writeText(quote.innerText);
  tooltip.innerHTML = "Copied" ;
}

// Date 
document.getElementById("date").textContent = new Date().toLocaleDateString('de-DE');
