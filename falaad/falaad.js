//   let counter=0
// function terminalP(userP){
    // let counter=0
    // for(i=0;i<=10;i++){
    //     counter+=1
    //     console.log(`${counter}% Working`)
    // }
    
//     setTimeout(()=>{
//         console.log("0%Working")
//     },3000)
// }
// function counterU(){
//     setInterval(() => {
        
   
//         console.log(`\r${counter}%Working`)
//         counter+=1
    
        
//     },300)
    
// }
// counterU()
// terminalP()
// userP=prompt("enter command")
// if(userP=='sudo apt update'){
//     terminalP(userP)
// }else{
//     console.log(`'${userP}' is not a valid command `)
// }

let counter = 0;

function counterU() {
  const timer = setInterval(() => {
    console.clear();
    console.log(`${counter}% Working`);
    counter++;

    if (counter > 50) {
      clearInterval(timer);
      console.clear();
      console.log("✅ Done!");
    }
  }, 50);
}

counterU();
