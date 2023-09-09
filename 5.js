const R = 200;

class Appliance{
  constructor(name){
    this.name = name;
    this.status = false;   
  }
  
  turnOn(){
    if(this.status === false){
    this.status = true
    console.log('Прибор включен')
    } else {
    console.log('Прибор уже был включен')
    }
  }
  
  turnOff(){
    if (this.status === true){
    this.status = false
    console.log('Прибор выключен')
    } else {
    console.log('Прибор уже был выключен')
    }
  }  
}

class Lamp extends Appliance {
  constructor(name, model, turnOff, turnOn){
    super(turnOff, turnOn);
    //super(turnOn);
    this.name = name;  
    this.model = 'Xiaomi';
  }
  
  getPower(power){
    let energy = (power*power)/R;
    console.log(`Мощность лампы: ${energy} вт`)
  }
  
  getModel(){
    console.log(`Модель лампы: ${this.model}`)
  }
}



class Computer extends Appliance {
  constructor(name, power, price, turnOn, turnOff){
    super(turnOff, turnOn);
    //super(turnOn);
    this.name = name;    
    this.price = 70000;
  }

  getPower(power){
    let energy = (power*power)/R;
    console.log(`Мощность компа: ${energy} вт`)
  }

  getPrice(){
    console.log(`Цена компа: ${this.price} рублей`)
  }
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