var x = 3
var x = 4
// thì x sẽ là 4 nó sẽ rất ảnh hưởng đến chương trình và gây ra lỗi
let y = 5;
// let y = 6 // tại đây sẽ bị báo lỗi ngay vì y đã được khai báo trước đó rồi mà
const Z = 7;
// Z = 5 // tại đây báo lỗi ngay vì không thể thay đổi hằng @@ 

// # tóm lại:
/**
 * var: Có thể khai báo lại, hoặc cập nhật giá trị, có thể khai báo lại thì rơi vào lỗi và không biết lỗi đâu
 * let: có thể cập nhập và không thể khai báo lại
 * const: không thể cập nhập, không thể khai báo lại
 */

// vd 
const person = {
  name: 'leanhvu',
  age: 3
}

// const person = {
//   name = 'dada',
//   age: 5
// }; // tại đây sẽ báo lỗi, tuy nhiêu không thể thay đôi nhưng có thể cập nhập bên trong

// như là 
person.age = 100
person.name = 'Le Anh Vu'
console.log(person);
