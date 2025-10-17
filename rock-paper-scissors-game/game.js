const rock = document.getElementsByClassName('rock')[0]
const paper = document.getElementsByClassName('paper')[0]
const scissors = document.getElementsByClassName('scissors')[0]


let result='';
let computerMove='';
let randomNumber=Math.random();
   if(randomNumber>=0 && randomNumber< 1 / 3){
       computerMove=('rock')
    }else if(randomNumber>=1 / 3 && randomNumber< 2 / 3){
       computerMove=('paper')
    }else if(randomNumber>=2 / 3 && randomNumber< 3 / 3){
      computerMove=('scissors')
 };

rock.onclick=function(){
    if(computerMove==='rock'){
            result='tie'
         }else if(computerMove==='paper'){
            result='you lose'
         }else if(computerMove==='scissors'){
            result='you win'
         }
         alert(`you choosed 'rock and the computer choosed ${computerMove} so ${result}'`)
    
}
  
paper.onclick=function(){
    if(computerMove==='rock'){
               result='you win'
            }else if(computerMove==='paper'){
               result='tie'
            }else if(computerMove==='scissors'){
               result='you lose'
            }
            alert(`you choosed 'paper' and the computer choosed ${computerMove} so '${result}'`)
}

scissors.onclick=function(){
    if(computerMove==='rock'){
                result='you lose'
            }else if(computerMove==='paper'){
                result='you win'
            }else if(computerMove==='scissors'){
                result='tie'
            }
            alert(`you choosed 'scissors' and the computer choosed ${computerMove} so '${result}'`)
    
}