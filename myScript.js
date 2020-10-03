const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy",
 "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole",
  "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", 
  "lengths", "monitor", "information"];

let number = Math.floor(Math.random() * (wordList.length -1));
let randomWord= wordList[number].split("")
// console.log(randomWord)
let divList = [];
let trueWords = [];
let wrongWords = [];

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
    division.innerText = item;
    q(".word").appendChild(division);
    divList.push(division)
    // console.log(divList)
    // console.log(divList.innerText)
    
  })
}
function wordControl(e){
    
    divList.forEach(item =>{
      
      if(item.innerText == e.key) {
        item.style.color = "red";
        trueWords.push(item.innerText);
        console.log("true: ",trueWords)
      }
      else if(!randomWord.includes(e.key) && !wrongWords.includes(e.key)){
        q(".wrong").style.display = "inline";
        wrongWords.push(e.key)
        q(".wrong").innerText += e.key
        // console.log("wrong: ",wrongWords)
    
      }
     
    })
      
    
}

  