// 📌 DESCRIPTION:
// Вам будет дана непустая строка. Ваша задача — вернуть средний символ(ы) строки.
//
// Если длина строки нечетная, вернуть средний символ.
// Если длина строки четная, вернуть 2 средних символа.

// Примеры:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//✅ SOLUTTION:
// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

console.log(getMiddle(`robot`));
console.log(getMiddle(`Jonh`));
