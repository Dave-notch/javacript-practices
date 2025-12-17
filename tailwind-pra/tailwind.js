let checkoutput=document.getElementById("clickOutput")
let clickME=document.getElementById("clickBtn")
let clickMEdbl=document.getElementById("dblClickBtn")

clickME.addEventListener("click", ()=>{
    checkoutput.innerHTML="clicked"
    clickME.style.background='red'
})

clickMEdbl.addEventListener("dblclick", ()=>{
    dblClickBtn.innerHTML="wow"
    clickME.style.background=''
})


let hoverME=document.getElementById('hoverBox')
let outPut=document.getElementById('hoverOutput')

hoverME.addEventListener('mouseover', ()=>{
    hoverME.style.background='purple'
    outPut.innerHTML='Hovered Over'
})

hoverME.addEventListener("mouseout", ()=>{
    hoverME.style.background='rgba(0,0,0,0.15)'
    outPut.innerHTML='Hovered out'
})


let keyboard=document.getElementById('keyInput')
let outputkey=document.getElementById('keyOutput')

keyboard.addEventListener("keydown", (event)=>{
    
    outputkey.innerHTML=event.key
    
})


let focuss=document.getElementById('focusInput')
let focusoutput=document.getElementById('focusOutput')

focuss.addEventListener("focus", ()=>{
    focusoutput.innerHTML="focused"
})

focuss.addEventListener("blur", ()=>{
    focusoutput.innerHTML="null"

})


let scrolll=document.getElementById('scrollContent').parentElement
let scrollOutput=document.getElementById('scrollOutput')

scrolll.addEventListener("scroll", ()=>{
    scrollOutput.innerHTML=eval.target.value
})
