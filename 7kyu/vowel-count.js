// 📌 DESCRIPTION:
// Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, o, uгласными для этого Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.

//✅ SOLUTTION:
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

function getCount(str) {
  return str
    .split(``)
    .filter(
      (item) =>
        item === `a` ||
        item === `e` ||
        item === `i` ||
        item === `o` ||
        item === `u`,
    )
    .join(``).length;
}

console.log(getCount(`paryhoo`));
console.log(getCount(`pyryh1*`));
