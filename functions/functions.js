// function checkVotingage(age){
//     if(age>=18)
//         console.log('youre eligible to vote')
//     else if (age<18)
//         console.log('youre not eligible to vote')
// }
// let user1=prompt('enter your age')
// let user2=prompt('enter your age')
// let user3=prompt('enter your age')
// checkVotingage(user1,user2,user3)


// function checkEvenodd(limit){
//     for(i=1;i<limit;i++){
//         if(i%2==0)
//             console.log(`${i} is even`)
//         else{
//             console.log(`${i} is odd`)
//         }
//     }
// }
// r=prompt('enter a limit number')
// checkEvenodd(r)

// processPayment=callback=>callback();

// setTimeout(processPayment(function(){
//     console.log("payment successfull")
// }),3000)

// setInterval(()=>console.log("hiii"),3000)


// function sum(callback, a,b){
//     let result=a+b
//     callback(result)
// }

// function displayonpage(result){
//     document.getElementById('Myh1').textContent=result
// }

// sum(displayonpage,1,2)

// function calculate(a,b,oparation){
   
//     oparation(a+b)
// }
// function oparation(result){
//   console.log(result);
  
// }

// calculate(1,2,oparation)

// function checkNumber(v, num){
    
//     v(num)
// }
// function evenodd(num){
//     if(num%2==0){
//         console.log('even')
//     }else{console.log('odd')}
// }

// checkNumber(evenodd,5)

// function gradeScore(score, callback){
//     callback(score)
// }

// function grades(score){
//     if(score>=90){
//         console.log('grade A');
//     }else if (score>=80){
//         console.log('B')
//     }else if(score<80){
//         console.log('F');
        
//     }
// }

// gradeScore(90,grades)
// let user = { name: 'anor', age: 19 }

// function processUser(user, callback){
    

//     doubleAge(user.age)
//     capitalizeName(user.name)
//     callback(user)
//     // printUser(user, cb)
// }

// function capitalizeName(){
    
//     user.name = user.name.toUpperCase();
// }

// function doubleAge(user){
    
//     user.age=user.age*2
// }

// function printUser(doubleAge,capitalizeName){
//     console,log(doubleAge,capitalizeName)

// }

// processUser(user.age,doubleAge,)
// processUser(user,name,capitalizeName,)

// let user = { name: 'anor', age: 19 }

// function processUser(user, callback) {
//     doubleAge(user, function(userAfterAge) {
//         capitalizeName(userAfterAge, function(userAfterName) {
//             callback(userAfterName)
//         })
//     })
// }

// function doubleAge(user, next) {
//     user.age = user.age * 2
//     next(user)
// }

// function capitalizeName(user, next) {
//     user.name = user.name.toUpperCase()
//     next(user)
// }

// function printUser(user) {
//     console.log(user)
// }

// // Run the pipeline
// processUser(user, printUser)


function processString(name, printString){
    reverseString(name, function(afterReverse){
        toUpperCaseString(afterReverse , function(afterUppercase){
            appendExclamation(afterUppercase, function(afterAppend){
                printString(afterAppend)
            })
        })
    })

}

function reverseString(name, next){
    name=name.split("").reverse().join("");
    next(name)
}

function toUpperCaseString(name, next){
    name = name.toUpperCase()
    next(name)
}

function appendExclamation(name, next){
    name=name+'!'
    next(name)
}

function Output(name){
    console.log(name)
}

processString("Anor", Output)
