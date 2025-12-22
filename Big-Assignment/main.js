
let Password=document.getElementById("signupPassword")
let labelPassword=document.getElementById("labelPassword")
let confirmPassword=document.getElementById("confirmPassword")
let errorMessege=document.getElementById("errorMessege")
let signuplabelPassword=document.getElementById("signuplabelPassword")

  let comparingPass=[confirmPassword,Password]
comparingPass.forEach(input=>{
    input.addEventListener("input",(event)=>{
        let pass=Password.value
        let confirm=confirmPassword.value

        if(confirm===""){
            errorMessege.innerHTML="Required"
            errorMessege.style.color="rgb(214, 108, 108)"
            confirmPassword.style.border="1px solid rgb(214, 108, 108)"
            signuplabelPassword.style.color="rgb(214, 108, 108)"
        }else if(confirm!=pass){
            errorMessege.innerHTML="The passwords you entered do not match."
            errorMessege.style.color="rgb(214, 108, 108)"
            confirmPassword.style.border="1px solid rgb(214, 108, 108)"
            signuplabelPassword.style.color="rgb(214, 108, 108)"
        }else if(confirm===pass){
            errorMessege.innerHTML="You created password successfully"
            errorMessege.style.color="rgba(23, 207, 78, 1)"
            confirmPassword.style.border="1px solid rgba(23, 207, 78, 1)"
            signuplabelPassword.style.color="rgba(23, 207, 78, 1)"
        }
    })
})

Password.addEventListener("input",(event)=>{
    function passCheck(){
    let pass=event.target.value
    let characters=document.getElementById("characters")
    let oneSymbol=document.getElementById("oneSymbol")
    let upperCase=document.getElementById("uppercase")
    const symbols = [
  "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
  ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
];
    const uppercase=[
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];


  let isLengthValid = pass.length >= 8 && pass.length <= 14;
  let hasSymbol = symbols.some(s => pass.includes(s));
  let hasUppercase = uppercase.some(u => pass.includes(u));


  characters.style.color = isLengthValid
    ? "rgba(23, 207, 78, 1)"
    : "rgb(214, 108, 108)";

  oneSymbol.style.color = hasSymbol
    ? "rgba(23, 207, 78, 1)"
    : "rgb(214, 108, 108)";


  upperCase.style.color = hasUppercase
    ? "rgba(23, 207, 78, 1)"
    : "rgb(214, 108, 108)";


  labelPassword.style.color =
    isLengthValid && hasSymbol && hasUppercase
      ? "rgba(23, 207, 78, 1)"
      : "rgb(214, 108, 108)";

   signupPassword.style.border =
    isLengthValid && hasSymbol && hasUppercase
      ? "1px solid rgba(23, 207, 78, 1)"
      : "1px solid rgb(214, 108, 108)";
    
      
}
passCheck()
})


let signupEmail=document.getElementById("signupEmail")
let loginPassword=document.getElementById("loginPassword")
let signupPassword=document.getElementById("signupPassword")
let signupName=document.getElementById("signupName")
let loginEmail=document.getElementById("loginEmail")


loginEmail.addEventListener("input",(event)=>{
  let logemail=event.target.value
  let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(emailRegex.test(logemail)){
    loginEmail.style.border="1px solid rgba(23, 207, 78, 1)"
  }else{
    loginEmail.style.border="1px solid rgb(214, 108, 108)"
  }

  // console.log(logemail)
})




signupEmail.addEventListener("input",(event)=>{
    let email=event.target.value.trim()
    let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    signupEmail.classList.remove("input-error", "input-success");
    if(emailRegex.test(email)){
        
        signupEmail.classList.add("input-success")
    }else {
        signupEmail.classList.add("input-error")
    }
    // console.log(email);
    
})
let themeToggle=document.getElementById("themeToggle")
let signupBtn=document.getElementById("signupBtn")

signupBtn.addEventListener("click",()=>{

})