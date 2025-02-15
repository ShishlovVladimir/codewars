// 📌 DESCRIPTION:
// Дано: последовательность значений разного типа (число, строка, логическое значение).
// Вы должны вернуть объект с отдельными свойствами для каждого из типов, представленных во входных данных.
// Каждое свойство должно содержать массив соответствующих значений.
//
// сохранить порядок значений как во входном массиве
// если тип не указан во входных данных, соответствующее свойство не ожидается
// Итак, для этого ввода:
//
// ['a', 1, 2, false, 'b']
//
// Ожидаемый результат:
//
// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

//✅ SOLUTTION:
function separateTypes(arr) {
  const obj = {};
  arr.forEach((value) => {
    let type = typeof value;
    obj.hasOwnProperty(type) ? obj[type].push(value) : (obj[type] = [value]);
  });
  return obj;
}

console.log(separateTypes(["a", 1, 2, -1, false, "b"]));
