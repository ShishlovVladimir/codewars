// 📌 DESCRIPTION:
//В этом ката ваша задача реализовать расширенную версию знаменитой игры «камень-ножницы-бумага». Правила следующие:
// Ножницы режут бумагу
// Бумажные обложки Rock
// Камень давит Ящерицу
// Ящерица отравила Спока
// Спок разбивает ножницы
// Ножницы обезглавливают Ящерицу
// Ящерица ест бумагу
// Статья опровергает Спока
// Спок испаряет Рок
// Камень крушит ножницы
// Задача:
// Учитывая два значения из указанной выше игры, верните результат: "Player 1 Won!", "Player 2 Won!", или "Draw!".
//
// Входы
// Значения будут даны как одно из "rock", "paper", "scissors", "lizard", "spock".

//✅ SOLUTTION:
function rpsls(pl1, pl2) {
  if (pl1 === pl2) return `Draw!`;
  let arr = [`rock`, `lizard`, `spock`, `scissors`, `paper`];
  let n1 = arr.indexOf(pl1);
  let n2 = arr.indexOf(pl2);
  return (n1 + 1) % 5 === n2 || (n1 + 3) % 5 === n2
    ? `Player 1 Won!`
    : `Player 2 Won!`;
}

console.log(rpsls(`rock`, `scissors`));
console.log(rpsls(`scissors`, `scissors`));
