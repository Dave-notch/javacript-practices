// function subscribe(){
      
// const subbtn=document.querySelector('.sub-btn');
        
//         if(subbtn.innerHTML==='Subscribe'){
//             subbtn.innerHTML='Subscribed';
//         }else{
//             subbtn.innerHTML='Subscribe';
//         }
        
// }



// suaal 1
document.getElementById("mainTitle").textContent =
  "Welcome to the DOM Laboratory";



// suaal 2
let infos = document.getElementsByClassName("info");
for (let i = 0; i < infos.length; i++) {
  infos[i].style.color = "red";
}



// suaal 3
let section1Paras = document
  .getElementById("section1")
  .getElementsByTagName("p");
for (let i = 0; i < section1Paras.length; i++) {
  section1Paras[i].style.background = "lightblue";
}



// suaal 4
document.querySelector("#section1 p").style.fontWeight = "bold";



// suaal 5
let listItems = document.querySelectorAll("#myList li");
listItems.forEach(li => {
  li.style.border = "1px solid black";
});



// suaal 6
document.querySelector("#myLink").textContent = "Visit Google";



// suaal 7
document.querySelector("#section4").style.background = "orange";



// suaal 8
document.querySelectorAll(".info")[1].style.fontSize = "20px";



// suaal 9
let allDivs = document.getElementsByTagName("div");
for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].classList.add("highlight");
}



// suaal 10
document.querySelector("#output h2").textContent =
  "DOM Output Area";



// suaal 11
document.querySelector("#p1").textContent =
  "This text was updated using textContent()";



// suaal 12
document.querySelector("#section2").innerHTML =
  '<a id="myLink" href="#">New Dynamic Link</a>';



// suaal 13
console.log(
  document.querySelector("#myLink").getAttribute("href")
);



// suaal 14
document
  .querySelector("#myLink")
  .setAttribute("href", "https://example.com");



// suaal 15
document.querySelector("#section1").style.background = "green";
document.querySelector("#section3").style.color = "blue";



// suaal 16
document.querySelector("#section1").classList.add("highlight");



// suaal 17
document.querySelector("#section1").classList.remove("highlight");



// suaal 18
let newP = document.createElement("p");
newP.textContent = "New Paragraph Created!";
document.querySelector("#output").appendChild(newP);



// suaal 19
let newLi = document.createElement("li");
newLi.textContent = "Item D";
document.querySelector("#myList").appendChild(newLi);



// suaal 20
let newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.textContent = "Dynamically Added Box";
document.body.appendChild(newDiv);



// suaal 21
let itemB = document.querySelectorAll("#myList li")[1];
let itemX = document.createElement("li");
itemX.textContent = "Item X";
itemB.parentNode.insertBefore(itemX, itemB);



// suaal 22
let insertedP = document.createElement("p");
insertedP.textContent = "Inserted Paragraph";
let firstP = document.querySelector("#section1 p");
firstP.parentNode.insertBefore(insertedP, firstP);



// suaal 23
let alertBtn = document.createElement("button");
alertBtn.textContent = "Alert";
alertBtn.onclick = () => alert("Hello!");
document.querySelector("#section4").appendChild(alertBtn);



// suaal 24
document.querySelector("#output").innerHTML +=
  "<h2>Extra Output</h2>";



// suaal 25
let clonedP = document.querySelector("#p1").cloneNode(true);
document.querySelector("#section3").appendChild(clonedP);



// suaal 26
document.querySelector("#myList li").remove();



// suaal 27
document.querySelector("#section4").remove();



// suaal 28
let list = document.querySelector("#myList");
list.removeChild(list.lastElementChild);



// suaal 29
document.querySelector("#btnMsg").remove();



// suaal 30
let itemBReplace = document.querySelector("#myList li");
let replacedItem = document.createElement("li");
replacedItem.textContent = "Replaced Item";
itemBReplace.parentNode.replaceChild(replacedItem, itemBReplace);



// suaal 31
let newH1 = document.createElement("h1");
newH1.textContent = "DOM Mastery in Progress";
let oldH1 = document.getElementById("mainTitle");
oldH1.parentNode.replaceChild(newH1, oldH1);



// suaal 32
let infoParas = document.querySelectorAll(".info");
infoParas.forEach(info => {
  let p = document.createElement("p");
  p.textContent = "Replaced Info Paragraph";
  info.parentNode.replaceChild(p, info);
});



// suaal 33
let link = document.querySelector("#section2 a");
let btn = document.createElement("button");
btn.textContent = "Click Here";
link.parentNode.replaceChild(btn, link);



// suaal 34
let output = document.querySelector("#output");
let oldH2 = output.querySelector("h2");
let newH2 = document.createElement("h2");
newH2.textContent = "Replaced Output Heading";
output.replaceChild(newH2, oldH2);
