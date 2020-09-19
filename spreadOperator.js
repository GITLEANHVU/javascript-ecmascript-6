const FRUIT_OBJ = {
  f1: 'orange',
  f2: 'mango',
  f3: 'banana',
  f4: 'lemon',
  f5: 'demon',
  f6: 'apple'
}
const FRUIT_ARRAY = ['orange', 'mango', 'banana', 'lemon', 'demon', 'apple'];

const f = { ...FRUIT_OBJ, f7: 'carrot' }
// cái ví dụ này mới hay nè he :)
function sum(...numbers) {
  let total = 0;
  numbers.forEach(num => {
    total += num;
  });
  return total;
}

console.log(sum(1, 2, 1))