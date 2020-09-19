const computedPropertyNames = 'dinner'

const meal = {
  breakFirst: 'xoi',
  lunch: 'pho',
  // đây là computedPropertyNames 
  [computedPropertyNames + ' Today']: 'bun cha ca'
}

console.log(meal)
const name = 'Ten'

const person = {
  nationality: 'Viet Nam',
  [`HoVa${name}`]: 'Le Anh Vu',
}
console.log(person);

const anotherPerson = {
  ...person,
  HoVaTen: "Another Person",
  age: 20
}
console.log(anotherPerson)