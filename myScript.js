const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy",
 "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole",
  "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", 
  "lengths", "monitor", "information"];

let number = Math.floor(Math.random() * (wordList.length -1));
let randomWord= wordList[number].split("")
// console.log(randomWord)
let divList = [];

function q(par){
    return document.querySelector(par);
}
q("body").addEventListener("keyup",(e)=>{wordControl(e) })
selectWord();
wordControl();

function selectWord(){
  randomWord.forEach(item=>{
    let division = document.createElement("div");
    division.classList.add("letter");
    division.innerText=item;
    q(".word").appendChild(division);
    divList.push(division)
    console.log(division.innerText)
    
  })
}

function wordControl(e){
    
    divList.forEach(a =>{
      if(e.key === a){
        a.style.color = "red"
      }
    })
      
    
}

  