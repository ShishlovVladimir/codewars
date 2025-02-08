// 📌 DESCRIPTION:
// У вас есть приложение для группового чата, но кто сейчас онлайн!?
//
// Вы хотите показать своим пользователям, кто из их друзей находится в сети и доступен для общения!
//
// Для входных данных массива объектов, содержащих имена пользователей, статус и время с момента последней активности (в минутах),
// создайте функцию для определения, кто является online, offlineи away.
//
// Если кто-то есть online, но его lastActivityне было более 10 минут назад, его следует рассмотреть away.

//Наконец, если у вас нет друзей в вашем чат-приложении, входными данными будет пустой массив [].
// В этом случае вы должны вернуть пустой объект {}(пустой словарь в C#).
//
// Входные данные имеют следующую структуру:
// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]

//Соответствующий вывод должен выглядеть следующим образом:
//
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }

//✅ SOLUTTION:
const whosOnline = (friends) => {
  let output = {};
  friends.forEach((e) => {
    let status = e.status;
    if (status === "online" && e.lastActivity > 10) status = "away";
    if (output[status]) {
      output[status].push(e.username);
    } else {
      output[status] = [e.username];
    }
  });
  return output;
};

const friends = [
  {
    username: "Vova",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));
