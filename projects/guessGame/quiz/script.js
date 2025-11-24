const start = document.querySelector(".btn")
const qsn = document.querySelector(".qsn")
const rnd = document.querySelector(".rnd")
const a = document.querySelector("#a")
const b = document.querySelector("#b")
const next = document.querySelector(".next")
const rs = document.querySelector(".result")


let ans = 0;
let p1A = 0
let p2A = 0

start.addEventListener("click", function(){
    start.innerHTML = "Next"
    const random1 = Math.floor(Math.random()*10)
    const random2 = Math.floor(Math.random()*10)
    let opr = ['+','*','/']
    let optr = opr[Math.floor(Math.random() * opr.length)]
    qsn.innerHTML = `${random1} ${optr} ${random2}`
    if(optr ==='+'){
         
         ans = random1 + random2
    }
    if(optr === '*'){
        ans = random1 * random2
    }
    if(optr === ' /'){
        ans = (random1/random2).toFixed(2)
    }
    
    
})

next.addEventListener("click",function(){
    let p1 = parseInt(a.value)
    
    let p2 = parseInt(b.value)
    
    if(p1 == ans) p1A = p1A +1
    if(p2 == ans) p2A = p2A +1
    
    a.value =""
    b.value=""

    rnd.innerHTML =parseInt(rnd.innerHTML)+1 
    if(parseInt(rnd.innerHTML) === 3) {
        result()
    }
})

const result = function(){
    if(p1A > p2A) rs.innerHTML = `Player 1 won with ${p1A} Points`
    if(p1A < p2A) rs.innerHTML = `Player 2 won with ${p2A} Points`

}
