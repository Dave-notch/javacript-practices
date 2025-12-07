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

const object={
    message: 'heyy how are u'
}
// const message=object.message
const {message}=object
console.log(message)

const c0nsole={
    l0g:[]
}
let user=prompt('enter message property')
c0nsole.l0g.push(user)
console.log(c0nsole.l0g)

// obove is self tought below is assingnment 

const person = {
  name: "Ayaan",
  age: 21,
  city: "Hargeisa"
};
console.log(person);

const student = {
  name: "Mahad",
  math: 78,
  science: 84,
  english: 90
};
console.log(student.name, student.math);

const phone = {
  brand: "Tecno",
  model: "Camon 20",
  storage: "256GB"
};
console.log(phone.model);

const account = {
  owner: "Hodan",
  balance: 1200,
  currency: "USD"
};
console.log(account.balance);

const menuItem = {
  name: "Bariis iyo Hilib",
  price: 5,
  spicy: false
};
console.log(menuItem.name, menuItem.price);

const car = {
  make: "Toyota",
  model: "Hilux",
  year: 2019
};
console.log(car.year);

const book = {
  title: "Geeri iyo Nolosha",
  author: "Cali Mataan",
  pages: 210
};
console.log(book.title);

const item = {
  name: "Canjeero Pack",
  quantity: 50,
  price: 3
};
console.log(item.quantity);

const player = {
  name: "Abshir",
  goals: 12,
  assists: 7,
  club: "Jeenyo"
};
console.log(player.goals);

const weather = {
  city: "Mogadishu",
  temperature: 32,
  condition: "Sunny"
};
console.log(weather.temperature, weather.condition);







