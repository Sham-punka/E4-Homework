//Определить иерархию электроприборов. 
//Включить некоторые в розетку. Посчитать потребляемую мощность. 

// (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
//какими свойствами он обладает.

//План:

//Определить родительскую функцию с методами, которые включают/выключают прибор 
//из розетки.
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, 
//отличные от родительских методов.
//Создать экземпляры каждого прибора.
//Вывести в консоль и посмотреть результаты работы, гордиться собой. :))
const R = 200;

function Appliance(name){
  this.name = name,
  this.status = false
}

Appliance.prototype.turnOn = function(){
  if(this.status === false){
    this.status = true
    console.log('Прибор включен')
  } else {
    console.log('Прибор уже был включен')
  }
}

Appliance.prototype.turnOff = function(){
  if (this.status === true){
    this.status = false
    console.log('Прибор выключен')
  } else {
    console.log('Прибор уже был выключен')
  }
}


function Lamp(name){
  this.name = name,  
  this.model = 'Xiaomi'
}

Lamp.prototype = new Appliance()

Lamp.prototype.getPower = function(power){
  let energy = (power*power)/R;
  console.log(`Мощность лампы: ${energy} вт`)
}

Lamp.prototype.getModel = function(){  
  console.log(`Модель лампы: ${this.model}`)
}

function Computer(name){
  this.name = name,
  this.power = 700,
  this.price = 70000
}

Computer.prototype = new Appliance()

Computer.prototype.getPower = function(power){
  let energy = (power*power)/R;
  console.log(`Мощность компа: ${energy} вт`)
}

Computer.prototype.getPrice = function(){  
  console.log(`Цена компа: ${this.price} рублей`)
}

const Lamp1 = new Lamp('Lamp1');
const Comp1 = new Computer('Comp1');

Lamp1.turnOn()
Lamp1.turnOff()
Comp1.turnOff()
Comp1.getPower(400)
Lamp1.getPower(500)
Lamp1.getModel()
Comp1.getPrice()
