const products={
    muuse: 'muuse',
    'delivery-time': '1day',
    //funtion inside object
    // when funtion is inside object its called METHOD for example console.log 
    fun: function funtionDemo(){
        console.log("hii")
    }
}
// dot notation is the defoult way to access inside objects 
console.log(products.muuse)
// we use [] when dot notation doesnt support such things like {- inside 'delivery-time' }
console.log(products['delivery-time'])
console.log(products.fun())

console.log(JSON.stringify(products))

const JSonString=JSON.stringify(products)
console.log(JSON.parse(JSonString))


