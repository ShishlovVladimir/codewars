// 📌 DESCRIPTION:
// У нас есть число 12385. Мы хотим узнать значение ближайшего куба, но большего, чем 12385. Ответ будет 13824.
// У нас есть число 1245678. Мы хотим узнать 5-ю степень, ближайшую и большую, чем это число. Значение будет 1419857.
//
// Создать функцию, которая получает два аргумента, значение(val) и показатель степени(pow_) и выводит значение, которое мы хотим найти.
//
// Давайте рассмотрим несколько случаев:
//
//  (12385, 3) ==> 13824
//  (1245678, 5) ==> 1419857
//
// Значение (val) всегда будет положительным целым числом, (pow_), всегда больше, чем 1.
//
//
//✅ SOLUTTION:
function findNextPower(val, pow) {
  let number = +Math.pow(val, 1 / pow).toFixed(3);
  return Number.isInteger(number)
    ? (++number) ** pow
    : Math.ceil(number) ** pow;
}

console.log(findNextPower(8, 3));
