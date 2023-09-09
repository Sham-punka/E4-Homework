//Написать функцию, которая создает пустой объект, но без прототипа.

function create() {
  const a = Object.create(null)
  return a
}

const b = create()


console.log(b)
console.log(typeof(b))

