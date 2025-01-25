// 📌 DESCRIPTION:
//В этом Ката вам будет дана строка, которая может содержать как заглавные, так и строчные буквы,
// и ваша задача — преобразовать эту строку либо в строку, состоящую только из строчных букв,
// либо в строку, состоящую только из заглавных букв, на основе:
// Вносите как можно меньше изменений.
// Если строка содержит одинаковое количество заглавных и строчных букв, преобразовать строку в строчные.

//Например:

//solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
//solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
//solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//✅ SOLUTTION:
function solve(s) {
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      lower++;
    }
  }
  return lower >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve(`COde`));
console.log(solve(`Code`));
console.log(solve(`CODE`));
