//Написать функцию, которая принимает в качестве аргументов 
//строку и объект, а затем проверяет есть ли у переданного
//объекта свойство
//с данным именем. Функция должна возвращать true или false

const person = {
   name : 'Ivan',
   city : 'Moscow',
   age : 23,
}

const a = 'name';
const b = 'married'



function contain(obj, str) {
  for (let key in obj){
    if (key == str){
      return true;
    } else {
      return false
    }
  }  
}

console.log(contain(person, a))
console.log(contain(person, b))