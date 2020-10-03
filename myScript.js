const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy",
  "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole",
  "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue",
  "lengths", "monitor", "information"];


let man = ["#head", "#body", "#arm_right", "#arm_left", "#knee_right", "#knee_left"];
let number = Math.floor(Math.random() * (wordList.length - 1));
let selectedWord = wordList[number].split("")
let divList = [];
let trueWords = []; 
let wrongWords = [];
let counter = 0;
let known = 0;
console.log(selectedWord);
hangMan();

document.querySelector("body").addEventListener("keypress", myfunk = (e) => { wordControl(e) });
document.querySelectorAll(".refresh").forEach((a) => {a.addEventListener("click", () => { location.reload() })})
function q(par) {
  return document.querySelector(par)
}


function hangMan() {
  selectedWord.forEach(item => {
    let division = document.createElement("div");
    division.classList.add("letter");
    division.innerHTML = item;
    document.querySelector(".word").appendChild(division)
    divList.push(division);

    // console.log(division.innerHTML)
  })

}
// wordControl()

function wordControl(e) {
  if (trueWords.includes(e.key) || wrongWords.includes(e.key)) {
    q(".snackbar").classList.replace("snackbar", "snackbar2");
    setTimeout(() => { q(".snackbar2").classList.replace("snackbar2", "snackbar") }, 1000)
  }

  divList.forEach(item => {
    if (item.innerHTML == e.key) {
      item.style.color = "white";
      trueWords.push(e.key);
      
      if(selectedWord.length === trueWords.length){
        q(".confirm_box_win").style.display ="block";
        q("body").removeEventListener("keypress",myfunk)

      }
     
      known++;
    }
      
    

       
     
      
     

    else if (!selectedWord.includes(e.key) && !wrongWords.includes(e.key)) {
      wrongWords.push(e.key)
      document.querySelector(".wrong").style.display = "inline";
      q(".wrong").innerHTML += e.key;
      q(man[counter]).style.visibility = "visible"
      console.log("wroong: " + wrongWords)
      counter++;
      if (wrongWords.length == man.length) {
        q(".confirm_box_lost").style.display = "inline";
        q(".anounce").innerText += " " + wordList[number]
        q("body").removeEventListener("keypress",myfunk)
      }
    }

  })

}












































// let man = ["#head", "#body", "#arm_right", "#arm_left", "#knee_right", "#knee_left"];


// let number = Math.floor(Math.random() * (wordList.length - 1));
// let randomWord = wordList[number].split("")
// // console.log(randomWord)
// let divList = [];
// let trueWords = [];
// let wrongWords = [];
// let counter = 0;
// let known = 0;

// function q(par) {
//   return document.querySelector(par);
// }
// q("body").addEventListener("keyup", collector = (e) => { wordControl(e) })
// document.querySelectorAll(".refresh").forEach((a) => { a.addEventListener("click", () => { location.reload() }) })
// selectWord();


// function selectWord() {
//   randomWord.forEach(item => {
//     let division = document.createElement("div");
//     division.classList.add("letter");
//     division.innerText = item;
//     q(".word").appendChild(division);
//     divList.push(division)

//     // console.log(division.innerText)

//   })
//   // console.log(randomWord)
// }



// function wordControl(e) {

//   if (trueWords.includes(e.key) || wrongWords.includes(e.key)) {
//     q(".snackbar").classList.replace("snackbar", "snackbar2");
//     setTimeout(() => { q(".snackbar2").classList.replace("snackbar2", "snackbar") }, 2000)

//   }
//   divList.forEach(item => {


//     if (item.innerText == e.key) {
//       item.style.color = "white";
//       trueWords.push(item.innerText);
//       console.log("true: ", trueWords);
//       known++
//       if (divList.length == known) {
//         q(".confirm_box_win").style.display = "block";
//         q("body").removeEventListener("keyup", collector)
//         q(".anounceWon").innerText = wordList[number]


//       }

//     }


//     else if (!randomWord.includes(e.key) && !wrongWords.includes(e.key)) {
//       q(".wrong").style.display = "inline";
//       wrongWords.push(e.key);
//       q(".wrong").innerText += e.key;
//       // q(man[counter]).style.visibilty = "visible"
//       q(man[counter]).style.visibility = "visible"
//       counter++;
//       if (counter == man.length) {
//         q(".confirm_box_lost").style.display = "block";
//         q(".anounce").innerText += wordList[number];
//         q("body").removeEventListener("keyup", collector)

//       }

//       // console.log("wrong: ",wrongWords)
//     }
//   })




// }

