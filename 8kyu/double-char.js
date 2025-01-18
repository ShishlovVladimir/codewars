// 📌 DESCRIPTION:
// Учитывая строку, необходимо вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
//
// Примеры (Вход -> Выход):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "



//✅ SOLUTTION:
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}

console.log(doubleChar(`Hello`))
console.log(doubleChar(`1`))