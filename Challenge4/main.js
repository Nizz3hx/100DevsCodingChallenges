// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.
document.querySelector('#send').addEventListener('click', takesName)
let namesArr = ['arya','jon','daenerys','sansa']

function takesName(){
  let inputName = document.querySelector('#name').value.toLowerCase()

  let newNamesArr = namesArr.unshift(inputName)

  aNamePosition = newNamesArr.indexOf(inputName)

  document.querySelector('#position').innerText = aNamePosition

}
