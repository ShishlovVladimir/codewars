// 📌 DESCRIPTION:
// Напишите функцию isItLetter, которая сообщает является ли заданный символ буквой или нет.

//✅ SOLUTTION:
function isItLetter(character) {
  return /[a-z]/i.test(character);
}

console.log(isItLetter(`d`));
console.log(isItLetter(1));
