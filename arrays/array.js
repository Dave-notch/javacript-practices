// let names=["muuse","ali","abdi","xamdi","faatimo"]
// names.unshift("iqro")
// console.log(names)

// let cart=["milk", "bread","eggs"]
// cart.push("butter")
// console.log(cart)
// cart.unshift('juice')
// console.log(cart)
// cart.splice(1,1)
// console.log(cart)

// names.forEach((Element,index)=>
// console.log(`element is :${Element} index is: ${index}`)
// )

// let salary=[200,300,400,500,600,700]
// newsalary=salary.map(function(sal){
//     return sal+=50
// })
// console.log(newsalary)

// let prices=[10,20,30,40,50]
// let newprices=prices.map(function(pric){
    
//     return total=pric*1.15
    

// })
// console.log(prices)
// console.log(pricewithtax)
// highsalary=salary.filter(s=>s>=500)


// grades=[78,85,92,60,89]
// total = reduce(l)

// print(total)
// let names1=["muuse","ali","abdi","xamdi","faatimo"]
// console.log(names1.includes("muuse"))

// function generateFibonaccis(n) {
//     var fib = [1, 1];
//     for (var i = 2; i < n; i++) {
//         fib[i] = fib[i - 2]+ fib[i - 1];
//     }
//     return fib;
// }
// var fib = generateFibonaccis(1);
// console.log(fib.join(" "));

function isMatch(s, p) {
  const dp = Array(s.length + 1)
    .fill(false)
    .map(() => Array(p.length + 1).fill(false));

  dp[0][0] = true;

  // Handle patterns like a*, a*b*, a*b*c*
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] =
          dp[i][j - 2] || // zero occurrence
          ((p[j - 2] === '.' || p[j - 2] === s[i - 1]) && dp[i - 1][j]); // one or more
      }
    }
  }

  return dp[s.length][p.length];
}

// Example:
console.log(isMatch("aa", "a"));    // false
console.log(isMatch("aa", "a*"));   // true
console.log(isMatch("ab", ".*"));   // true
