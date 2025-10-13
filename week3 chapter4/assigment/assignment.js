// let customers=prompt("how many customers will be served today")
// let customer=0
// repeat=0
// while(repeat<customers){
//      customer+=1
     
//     cups=prompt(`customer ${customer}  what did he took`)
//     check=prompt("were they orange or mango")
//     if(check=="mango"){
//         mango=parseFloat(prompt("how much is the mango"))
//         total=cups*mango
//         continue;
//     }else if(check=="orange"){
//         orange=parseFloat(prompt("how much is the orange"))
//         total=cups*orange
//     }
   
//     repeat++
//     console.log(`customer ${customer} bought ${cups} cups of ${check} for ${total}`)

    
  
// }
// totalguud=total+=1

// console.log(`sir your whole total is ${totalguud}`)
// if(totalguud>100){
//     console.log("great jop you made exellent sales today")
// }else{
//     console.log("you can immprove tommorow  keep going")

// }

// obove here is first version  down there is redifined one


// let customers = parseInt(prompt("How many customers will be served today?"));
// let customer = 0;
// let repeat = 0;
// let totalguud = 0; // total for all customers

// while (repeat < customers) {
//   customer += 1;

//   let cups = parseFloat(prompt(`Customer ${customer}: how many cups did they take?`));
//   let check = prompt("Were they orange or mango?").toLowerCase();
//   let price = 0;

//   if (check === "mango") {
//     price = parseFloat(prompt("How much is the mango per cup?"));
//   } else if (check === "orange") {
//     price = parseFloat(prompt("How much is the orange per cup?"));
//   } else {
//     console.log("Invalid input, skipping customer.");
//     repeat++;
//     continue;
//   }

//   let total = cups * price;
//   totalguud += total;

//   console.log(`Customer ${customer} bought ${cups} cups of ${check} for $${total}`);
  
//   repeat++;
// }

// console.log(`Sir, your whole total is $${totalguud}`);

// if (totalguud > 100) {
//   console.log("Great job! You made excellent sales today!");
// } else {
//   console.log("You can improve tomorrow. Keep going!");
// }


//coffee shop with the same concept

let menu=["coffee","tea"];
let addNewitem=parseInt(prompt(`your current menu ${menu} is enter your new item`))
menu[addNewitem]=menu
console.log(`edited menu ${menu}`)
// let customers=prompt("how many customers are you going to serve?")
// let customerCount=1
// let dailyrevenue=0
// for(repeat=1;repeat<=customers;repeat++){
  
//   let cups=prompt(`customer ${customerCount} how many cups does he need?`)
  // let check=String(prompt("coffee or tea?")).toLowerCase();

//   if(check==="coffee"){
//     price=parseFloat(prompt("how much is the coffee per cup?"))
//     total=cups*price
//   } else if(check==="tea"){
//     price=parseFloat(prompt("how much is the tea per cup?"))
//     total=cups*price
//   }
//   console.log(`customer ${customerCount} took ${cups} of ${check} for $${total}`)
//   customerCount+=1
//    dailyrevenue+=total
   

// }
// console.log(`your daily revenue is $${dailyrevenue}`)
// let taxrate=0.10
// let tax=dailyrevenue*taxrate
// let aftertax=dailyrevenue-tax
// if(dailyrevenue<5){
//   taxrate=0
// }
// console.log(`your revenue before tax $${dailyrevenue} after tax is $${aftertax}`)

// if(dailyrevenue<5){
//   console.log(`heyy!! your daily revenue is less than $5 so try doing better`)
// }else if(dailyrevenue>=5){
//   console.log(`you did good today keep that spirit steady dont let it down`)
// }