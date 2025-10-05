// for(let num=20;num>=1;num--){
//     if (num%2!==0)
//     console.log(num) 
// }

// let num=20
// while(num>=1){
//     if (num%2==1)
//     console.log(num)
//     num--
// }


// let pass=1234
// let userpass=prompt("enter pass")
// let again=1
// while(pass!=userpass){

        
//     while(again<=2){
      
//             if(userpass==""){
//             userpass=prompt("it cant be empty enter again")

//         }
//         if(pass!=userpass){
//           userpass=prompt("enter again")
//           again++}

//     }
//     console.log("times up!!")
//     break;
    

// }
// if (pass==userpass){
//           console.log("correct")
//         }
//         else if(userpass==""){
//             console.log("it can't be empty")

//         }


let pass = 1234;
let userpass = prompt("Enter password:");
let again = 1;

while (pass != userpass) {
  while (again <= 2) {
    if (userpass == "") {
      userpass = prompt("It can't be empty. Enter again:");
    }

    if (pass != userpass) {
      userpass = prompt("Enter again:");
      again++;
    }
  }

  console.log("Times up!!");
  break;
}

if (pass == userpass) {
  console.log("Correct");
} else if (userpass == "") {
  console.log("It can't be empty");
}
