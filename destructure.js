const FRUIT_OBJ = {
  f1: 'orange',
  f2: 'mango',
  f3: 'banana',
  f4: 'lemon',
  f5: 'demon',
  f6: 'apple'
}
const FRUIT_ARRAY = ['orange', 'mango', 'banana', 'lemon', 'demon', 'apple'];

// nếu console.log các giá trị trên thì bạn phải làm rất dài
// FRUIT_ARRAY[0] hoặc FRUIT_OBJ.f1

const { f1, f2, f3, f4, f5, f6 } = FRUIT_OBJ;
const [a1, a2, a3, a4, a5, a6] = FRUIT_ARRAY;

console.log(f1);
console.log(a6);

