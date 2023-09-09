//Написать, функцию, которая принимает в качестве аргумента объект
//и выводит в консоль все ключи и значения только собственных свойств.
//Данная функция не должна возвращать значение.
const a = {
   name : 'Ivan',
   city : 'Moscow',
   age : 23,
}

b = Object.create(a)
b.surname = 'Ivanov';

function enumeration(obj) {
  for (let key in obj){
    console.log(key)
    if (obj.hasOwnProperty(key)){
      console.log(obj[key]);      
    }     
  }  
}

console.log(enumeration(b))