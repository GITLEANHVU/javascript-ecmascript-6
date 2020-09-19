const meal = {
  breakFirst: 'xoi',
  lunch: 'pho',
  dinner: 'com'
}

const alphabet = ['a', 'b', 'c', 'd'];

// for (let item in meal) console.log(item);
// for (let item in alphabet) console.log(item)
// chạy cho object thì sẽ cho ra keyword, còn trong mảng cho ra vị trí
// nói chung là cho ra index cả thôi

// for (let item of alphabet) console.log(item)
for (let item in meal) console.log(meal[item])