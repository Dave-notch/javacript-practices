
let Password=document.getElementById("signupPassword")
let labelPassword=document.getElementById("labelPassword")


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

    if(pass.length<8){
        characters.style.color="rgb(214, 108, 108)"
        labelPassword.style.color="rgb(214, 108, 108)"
    }else if(pass.length>=8 && pass.length<=14){
        characters.style.color="rgba(23, 207, 78, 1)"
        labelPassword.style.color="rgba(23, 207, 78, 1)"
    }else if(pass.length>14){
        characters.style.color="rgb(214, 108, 108)"
        labelPassword.style.color="rgb(214, 108, 108)"
    }
    if(symbols.some(s=>pass.includes(s))){
        oneSymbol.style.color="rgba(23, 207, 78, 1)"
        labelPassword.style.color="rgba(23, 207, 78, 1)"
    }else{
        oneSymbol.style.color="rgb(214, 108, 108)"
        labelPassword.style.color="rgb(214, 108, 108)"
    }  
    if(uppercase.some(U=>pass.includes(U))){
        upperCase.style.color="rgba(23, 207, 78, 1)"
        labelPassword.style.color="rgba(23, 207, 78, 1)"
    }else{
        upperCase.style.color="rgb(214, 108, 108)"
        labelPassword.style.color="rgb(214, 108, 108)"
    } 
   
}
passCheck()
})

let signupEmail=document.getElementById("signupEmail")
let loginPassword=document.getElementById("loginPassword")
let signupPassword=document.getElementById("signupPassword")
let confirmPassword=document.getElementById("confirmPassword")
let signupName=document.getElementById("signupName")
let loginEmail=document.getElementById("loginEmail")
 

signupEmail.addEventListener("input",(event)=>{
    let email=event.target.value.trim()
    signupEmail.classList.remove("input-error", "input-success");
    if(email.length<=8){
        signupEmail.classList.add("input-error")
    }else{
        signupEmail.classList.add("input-success")
    }
    console.log(email);
    
})