// 📌 DESCRIPTION:
// Строительный мастер применяет определенные правила при возведении стен.
// Но строительный мастер не может рассчитать точное количество кирпичей, которое нужно потратить на стены.
//
// По этой причине от вас ожидается написание метода, который вычисляет количество кирпичей, которое необходимо потратить на стену, ширина и высота которой известны.
//
// Правила:
// Можно использовать только 3 вида кирпичей. Большой кирпич (60 см), Средний кирпич (40 см) и Маленький кирпич (20 см).
// Высота всех кирпичей составляет 5 см, а высота стены всегда 5 см и кратна этому значению.
// Ширина стены всегда составляет 60 см и кратна этому значению.
// Нижний ряд должен состоять только из крупных кирпичей.
// После этого первый кирпич справа следующего ряда должен быть средним кирпичом, первый кирпич слева — маленьким кирпичом.
// Наконец, первый кирпич справа следующего ряда должен быть маленьким кирпичом, первый кирпич слева — средним кирпичом.
// Первый ряд после завершения ряда снова состоит из крупных кирпичей, и цикл продолжается.
// Количество используемых кирпичей должно вернуться к следующему формату: «21L6M6S»
// Если количество средних и маленьких кирпичей равно 0, то ответ должен иметь следующий формат: «21L»

//✅ SOLUTTION:
const calculateBricksCount = (width, height) => {
  let w = width / 60;
  let h = height / 5;

  let l = Math.floor(w * h - (2 / 3) * (h - 1));
  let ms = Math.ceil((2 / 3) * (h - 1));

  return ms === 0 ? `${l}L` : `${l}L${ms}M${ms}S`;
};

console.log(calculateBricksCount(180, 45));
