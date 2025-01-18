// 📌 DESCRIPTION:
// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
//
// Пример: n=5-->[5,4,3,2,1]



//✅ SOLUTTION:
const reverseSeq = n => {
    let massive = [];
    for (let i = 1; i <= n; i++) {
        massive.unshift(i)
    }
    return massive;
};

console.log(reverseSeq(10));