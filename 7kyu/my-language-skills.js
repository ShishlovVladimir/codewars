// 📌 DESCRIPTION:
// Задача.
// Вам дан словарь/хэш/объект, содержащий некоторые языки и ваши результаты тестов на данных языках.
// Верните список языков, где ваш тестовый балл составляет не менее 60, в порядке убывания баллов.
//
// Примечание: оценки всегда будут уникальными (поэтому не будет повторяющихся значений)
//
// Примеры
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

//✅ SOLUTTION:
// function myLanguages(results) {
//   return Object.keys(results)
//     .filter((r) => results[r] > 59)
//     .sort((a, b) => results[b] - results[a]);
// }

function myLanguages(results) {
  let m = Object.entries(results).filter((item) => item[1] >= 60);
  m.sort((a, b) => b[1] - a[1]);
  return m.map((item) => item[0]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));
