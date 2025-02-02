// 📌 DESCRIPTION:
// Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.
//
// Все свойства входных объектов будут иметь только числовые значения.
// Объекты объединяются вместе, так что значения соответствующих ключей суммируются.
//
// Пример:
//
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.
//
// ✅ SOLUTTION:
// function combine() {
//     var obj = {}
//
//     for (var i = 0; i < arguments.length; i++) {
//         for (var key in arguments[i]) {
//             obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
//         }
//     }
//
//     return obj;
// }

function combine(...args) {
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    for (let key in args[i]) {
      if (obj.hasOwnProperty(key)) {
        obj[key] += args[i][key];
      } else {
        obj[key] = args[i][key];
      }
    }
  }
  return obj;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

const obj = combine(objA, objB);
console.log(obj);
