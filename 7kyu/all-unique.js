// 📌 DESCRIPTION:
// Напишите программу, которая определяет, содержит ли строка только уникальные символы.
// Верните true, если это так, и false в противном случае.
// Строка может содержать любой из 128 символов ASCII.
// Символы чувствительны к регистру, например, 'a' и 'A' считаются разными символами.

//✅ SOLUTTION:
function hasUniqueChars(str) {
  const unique = [...new Set(str)];
  return unique.length === str.length;
}

console.log(hasUniqueChars(`dk8ajhdkahd8`));
console.log(hasUniqueChars(`5dkmnbvcx1`));
