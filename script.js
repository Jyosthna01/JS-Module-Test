const modalBackdrop = document.getElementById('backdrop')

const closeModal = document.getElementById('close')
closeModal.addEventListener('click',()=>{
    modalBackdrop.classList.add('not-active')
})

const openModal=document.getElementById('open')
openModal.addEventListener('click',()=>{
    modalBackdrop.classList.remove('not-active')
})


const outcomes = [
    {
        outcome:'paper',
        winsfrom:'rock',
        lossfrom:'scissors',
    },
    {
        outcome:'scissors',
        winsfrom:'paper',
        lossfrom:'rock',
    },
    {
        outcome:'rock',
        winsfrom:'scissors',
        lossfrom:'paper',
    }
]

const getRandInt = (max) =>{
    return Math.floor(Math.random()*max)
}

const userChoice = document.getElementById('user-choice')
const houseChoice = document.getElementById('house-choice')

const decorate=[
    'background-image: url(./images/icon-paper.svg);color: hsl(230, 89%, 62%);',
    'background-image: url(./images/icon-scissors.svg);color: hsl(40, 84%, 53%);',
    'background-image: url(./images/icon-rock.svg);color: hsl(349, 70%, 56%);'
]

const step1=document.getElementById('step1')      
const step2=document.getElementById('step2')      
step2.style.cssText+='display:none'

let choice

const yourscore=document.getElementById('YourScore')
let scoreCount=0
YourScore.innerHTML=scoreCount

const computerscore=document.getElementById('ComputerScore')
let scoreCountComputer=0
ComputerScore.innerHTML=scoreCount

const buttons = document.querySelectorAll('.step-1-btns')
buttons.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        
        choice=btn.classList[1]
        step1.style.cssText+='display:none'                
        step2.style.cssText+='display:flex'                

        userChoice.style.cssText+=`${decorate[idx]}`       
        
        const user = outcomes[idx]
        const randInt=getRandInt(3)
        const house = outcomes[randInt]
        let winuser
        if(user.outcome===house.lossfrom){
            winuser='user'
            console.log("User  has Won")
            console.log('User  outcome : ', user.outcome)
            console.log('house  outcome : ', house.outcome)
        }
        else if(user.outcome===house.winsfrom){
            winuser='house'
            console.log("house  has Won")
            console.log('User  outcome : ', user.outcome)
            console.log('house  outcome : ', house.outcome)
        }
        else{
            winuser='draw'
            console.log('User  outcome : ', user.outcome)
            console.log('house  outcome : ', house.outcome)
        }

        houseChoice.style.cssText+=`${decorate[randInt]}`

        const result= document.getElementById('result')

        if(winuser==='user'){
            result.innerHTML='you won'
            scoreCount++
            YourScore.innerHTML=scoreCount
            userChoice.style.boxShadow=`0 0 0 60px rgba(255,255,255, 0.03),
            0 0 0 130px rgba(255,255,255, 0.02),
            0 0 0 210px rgba(255,255,255, 0.015),
            0 10px 0px rgba(0, 0, 0,0.3),
            0 10px 0px currentColor,
            0 10px 0 rgba(0, 0, 0,0.15) inset`

            houseChoice.style.boxShadow=``
        }
        else if(winuser==='draw'){
            result.innerHTML='draw'
            houseChoice.style.boxShadow=''
            userChoice.style.boxShadow=''
        }
        else{
            result.innerHTML='you lose'
            scoreCountComputer++
            ComputerScore.innerHTML=scoreCountComputer;
            houseChoice.style.boxShadow= `0 0 0 60px rgba(255,255,255, 0.03),
            0 0 0 130px rgba(255,255,255, 0.02),
            0 0 0 210px rgba(255,255,255, 0.015),
            0 10px 0px rgba(0, 0, 0,0.3),
            0 10px 0px currentColor,
            0 10px 0 rgba(0, 0, 0,0.15) inset`
            userChoice.style.boxShadow=''
        }
        checkWinner();
    })
})


const playAgain= document.getElementById('play-again')
playAgain.onclick = ()=>{
    step1.style.cssText-='display:none'                
    step2.style.cssText+='display:none'                
    
    
}
function checkWinner() {
    if (YourScore === 15) {
        const next= document.getElementById('next')
        next.onclick = ()=>{
            
        }
    
    }
}
