// 📌 DESCRIPTION:
// У вас есть компас с 8 направлениями ветра, например, такой:
//
// Вы получаете направление, в котором находитесь facing(одно из 8 направлений: N, NE, E, SE, S, SW, W, NW),
// и определенный градус turn(кратный 45, между -1080 и 1080);
// положительное значение означает по часовой стрелке, а отрицательное — против часовой стрелки.
//
// Вернитесь в ту сторону, куда вы будете смотреть после поворота.
//
// Примеры
// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"

//✅ SOLUTTION:

// function direction(facing, turn){
//     const arr = "N NE E SE S SW W NW".split(" ");
//     return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
// }

function direction(facing, turn) {
  let arr = [`N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`];
  let length = arr.length;
  let step = turn / 45;
  let index, n;

  if (step >= 0) {
    index = arr.indexOf(facing);
    n = (step + index) % length;
    return arr[n];
  } else {
    index = arr.reverse().indexOf(facing);
    n = (Math.abs(step) + index) % length;
    return arr[n];
  }
}

console.log(direction(`S`, 180));
console.log(direction(`SE`, -45));
console.log(direction(`W`, 495));
