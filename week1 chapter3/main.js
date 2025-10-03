
// let product = "milk"
// let price = 20
// console.log("the product=" + product)
// console.log("")
// console.log("the price=" + "$" + price)

// let R = 25
// const pi = 3.14
// let area = R * pi
// console.log("results =" + " " + area)

// let username = prompt("enter your username: ")
// let gmail = "@gmail.com"
// let total = username + gmail
// console.log("your gmail =" + " " + total)

// let pizzaslices = 10
// let friends = 3
// let divided = parseInt(pizzaslices / friends)
// let remain = pizzaslices % friends
// console.log("divided=" + " " + divided)
// console.log("remaining" + " " + remain)

// let admin="muuse"
// let admiName=prompt("enter your admin name: ")
// let messege=(admin==admiName)? "correct admiName" : "incorrect admiName";
// console.log(messege)
// let pass=1234
// let password=prompt("enter your password: ")
// let messege1=(pass==password)? "correct password" : "incorrect password";
// console.log(messege1)


// let age=18
// let citizen=prompt("enter your age; ")
// let messege=(age>=citizen)? "you can't vote" : "you can vote";
// console.log(messege)

// let stepcount=10
// let ahmedSteps=prompt("are u walking backward or forward: ")
// if (ahmedSteps=="forward"){
//     console.log(stepcount+1)
// }
// else if(ahmedSteps=="backward"){
   
//     console.log(stepcount-1)
// }

// let bill="200"
// let tip=50
// total=bill+tip
// console.log(total)

// let studenTscore=95
// let studentName="fatima"
// console.log(studenTscore!=studentName)


let vipCustomers=["abdi","ali","aasho","ahmed"];
let Customer=prompt("enter your name")
if (vipCustomers.includes(Customer)){
    console.log("you get 20% discount")
}
else{
    console.log("you get 5% discount")
}