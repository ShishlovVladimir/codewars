// 📌 DESCRIPTION:
// У Дэйва есть большой объем данных, к которым ему необходимо применить фильтры, которые достаточно просты.
//
// Он хочет, чтобы следующие функции работали так, как ожидается:
//
// even    // [1,2,3,4,5].even() should return [2,4]
// odd     // [1,2,3,4,5].odd() should return [1,3,5]
// under   // [1,2,3,4,5].under(4) should return [1,2,3]
// over    // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
// Они также должны работать при совместном использовании, например:
//
// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// И наконец, фильтры должны принимать только целочисленные значения из массива, например:
//
// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
// Примечание: список, не содержащий чисел, также будет проверен.

// ✅ SOLUTTION:

Array.prototype.odd = function () {
  return this.filter((el) => el & 1 && Number.isInteger(el));
};

Array.prototype.even = function () {
  return this.filter((el) => ~el & 1 && Number.isInteger(el));
};

Array.prototype.under = function (num) {
  return this.filter((el) => (el < num) & 1 && Number.isInteger(el));
};

Array.prototype.over = function (num) {
  return this.filter((el) => el > num && Number.isInteger(el));
};

Array.prototype.inRange = function (min, max) {
  return this.filter((el) => el >= min && el <= max && Number.isInteger(el));
};

let s = ["a", 11, "b", 300, "x", "13", 63, 122, 181, "z", 0.83, 0.11, 0];
//let s = ["a", "1", "2", 0.1, 1.2, 1, 2, 3, 4, 5, 6];
console.log(s.even());
console.log(s.odd());
console.log(s.under(4));
console.log(s.inRange(2, 100));
console.log(s.over(3));
