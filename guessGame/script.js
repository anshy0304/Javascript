const form  = document.getElementsByClassName("form")
const inp = document.getElementById("guessField")
const submit = document.getElementById("subt")
let res = document.getElementsByClassName("lowOrHi")[0]
let prev = document.querySelector(".guesses")
let rem = document.querySelector(".lastResult")


const random = Math.floor(Math.random()*100);
const newGame = function(){
  
    let newbtn = document.createElement("button");
    newbtn.innerHTML = "NewGame"
    newbtn.addEventListener("click",function(){
      rem.innerHTML = 10;
      prev.innerHTML = "";
      submit.disabled = false
      res.innerHTML = ""
    })
    res.innerHTML = ""
    res.appendChild(newbtn)
    

  }

submit.addEventListener("click",function(event){
  event.preventDefault();
  const guess = parseInt(inp.value);

  
  
    if(guess > random){
      res.innerHTML = "Guess is so high"
      prev.innerText += `${parseInt(inp.value)}, `
      rem.innerHTML = parseInt(rem.innerHTML) - 1;

    }
    if(guess < random){
      res.innerHTML = "Guess is so low"
      prev.innerText += `${parseInt(inp.value)}, `
      rem.innerHTML = parseInt(rem.innerHTML) - 1;

    }
    if(isNaN(guess)){
      res.innerHTML = "Please Input the correct value"
      
    }
    if(parseInt(inp.value) == random){
      res.innerHTML = "boom"
      prev.innerText += `${parseInt(inp.value)}, `
      newGame()


    }
    if(parseInt(rem.innerHTML) <= 0){
      newGame();
    }
    
})