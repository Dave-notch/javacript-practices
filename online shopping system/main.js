let name="fatima"
let phone="airpods pro"
let headphones="samsung S25"
let phonePrice=800
let headphonesPrice=200

let tempV=phone
phone=headphones
headphones=tempV

console.log(`${name} bought ${phone} for $${phonePrice} and ${headphones} for $${headphonesPrice}`)
let total=phonePrice+headphonesPrice
if(total>=1000){
    console.log("your discount is 20%")
}
if(total>=500,total<1000){
    console.log("your discount is 10%")
}
else if(total<500){
    console.log("No discount sorry")
}