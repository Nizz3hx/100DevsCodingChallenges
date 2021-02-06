// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER

document.querySelector("#go").addEventListener('click', takesNumAndWord)

function takesNumAndWord(){
  let num = document.querySelector("#number").value
  let word = document.querySelector("#word").value

  if (word.length * num > 100){
    alert("WINNER!")
  } else {
    alert("Not this time unfortunately!")
  }
}
