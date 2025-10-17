// const rock = document.getElementsByClassName('rock')[0]
// const paper = document.getElementsByClassName('paper')[0]
// const scissors = document.getElementsByClassName('scissors')[0]



// let result='';
// let computerMove;
// let counter=0
// let randomNumber=Math.random();
//    if(randomNumber>=0 && randomNumber< 1 / 3){
//        computerMove=('rock')
//     }else if(randomNumber>=1 / 3 && randomNumber< 2 / 3){
//        computerMove=('paper')
//     }else{
//       computerMove=('scissors')
//  };

// rock.onclick=function(){
//    let randomNumber=Math.random();
//       if(randomNumber>=0 && randomNumber< 1 / 3){
//          computerMove=('rock')
//       }else if(randomNumber>=1 / 3 && randomNumber< 2 / 3){
//          computerMove=('paper')
//       }else{
//          computerMove=('scissors')
//    };

//     if(computerMove==='rock'){
//             result='tie'
//          }else if(computerMove==='paper'){
//             result='you lose'
//          }else if(computerMove==='scissors'){
//             result='you win'
            
//          }
//    if(computerMove==='scissors'){
//       counter++
//       document.getElementById('wins').
//       innerText=counter 
//     }else if(computerMove==='rock'){
//       counter++
//       document.getElementById('ties').
//       innerText=counter 
//     } else if(computerMove==='paper'){
//       counter++
//       document.getElementById('loses').
//       innerText=counter
//     }
//          alert(`you choosed 'rock and the computer choosed ${computerMove} so ${result}'`)
    
// }
  
// paper.onclick=function(){
//    let randomNumber=Math.random();
//       if(randomNumber>=0 && randomNumber< 1 / 3){
//          computerMove=('rock')
//       }else if(randomNumber>=1 / 3 && randomNumber< 2 / 3){
//          computerMove=('paper')
//       }else{
//          computerMove=('scissors')
//    };
//     if(computerMove==='rock'){
//                result='you win'
//             }else if(computerMove==='paper'){
//                result='tie'
//             }else if(computerMove==='scissors'){
//                result='you lose'
//             }
//     if(computerMove==='rock'){
//       counter++
//       document.getElementById('wins').
//       innerText=counter 
//     }else if(computerMove==='scissors'){
//       counter++
//       document.getElementById('loses').
//       innerText=counter 
//     } else if(computerMove==='paper'){
//       counter++
//       document.getElementById('ties').
//       innerText=counter
//     }
//             alert(`you choosed 'paper' and the computer choosed ${computerMove} so '${result}'`)
// }

// scissors.onclick=function(){
//    let randomNumber=Math.random();
//       if(randomNumber>=0 && randomNumber< 1 / 3){
//          computerMove=('rock')
//       }else if(randomNumber>=1 / 3 && randomNumber< 2 / 3){
//          computerMove=('paper')
//       }else{
//          computerMove=('scissors')
//    };
//     if(computerMove==='rock'){
//                 result='you lose'
//             }else if(computerMove==='paper'){
//                 result='you win'
//             }else if(computerMove==='scissors'){
//                 result='tie'
//             }
//    if(computerMove==='paper'){
//       counter++
//       document.getElementById('wins').
//       innerText=counter 
//     } else if(computerMove==='scissors'){
//       counter++
//       document.getElementById('ties').
//       innerText=counter 
//     } else if(computerMove==='rock'){
//       counter++
//       document.getElementById('loses').
//       innerText=counter
//     }

//             alert(`you choosed 'scissors' and the computer choosed ${computerMove} so '${result}'`)
    
// }
 

   
const rock = document.getElementsByClassName('rock')[0]
const paper = document.getElementsByClassName('paper')[0]
const scissors = document.getElementsByClassName('scissors')[0]

let wins=0;
let loses=0;
let ties=0;

function getComputerMove(){
     let randomNumber=Math.random();
        if(randomNumber>=0 && randomNumber< 1 / 3){
           return 'rock'
      }else if(randomNumber>=1 / 3 && randomNumber< 2 / 3){
           return 'paper'
      }else{
          return 'scissors'
   };
}

function playermove(playerMove){
   const computerMove=getComputerMove();
   let result='';
   if(playerMove===computerMove)result='tie'
   else if(
   (playerMove === 'rock' && computerMove === 'scissors') ||
   (playerMove === 'paper' && computerMove === 'rock') ||
   (playerMove === 'scissors' && computerMove === 'paper')
)result='win'
else result='lose';


if(result==='win'){
   wins++
}else if(result==='lose'){
   loses++
}else ties++


document.getElementById('wins').
innerText=wins
document.getElementById('loses').
innerText=loses
document.getElementById('ties').
innerText=ties
}
rock.onclick = () => playermove('rock');
paper.onclick = () => playermove('paper');
scissors.onclick = () => playermove('scissors');

