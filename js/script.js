// const numberOfFilms = prompt('сколько фильвом вы уже посмотрели?', ' ');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };
// console.log(personalMovieDB.count, 'фильмов ');

// const askQuestion = prompt('какой последний фильм вы посмотрели? ', ' ');
// const askQuestion2 = prompt('на сколько вы его оцениваете? ', ' ');
// personalMovieDB.movies[askQuestion] = askQuestion2;
// console.log(personalMovieDB);

// console.table(personalMovieDB.movies);

const num = 50;
switch (num) {
  case 49:
    console.log('ERROR 49');
    break;
  case 100:
    console.log('ERROR 100');
    break;
  case 56:
    console.log('ESSACTLY 50');
    break;
  case 11:
    console.log('ERROR 11');
    break;
  default:
    console.log('SKIPPPP');
    break;
}

console.log((5 === 5 && 3 > 1) || 5);

for (i = 0; i < 1; i++) {
  let pic = '*';
  let probel = ' ';
  let probArr = [];
  picArr = [];

  for (j = 0; j < 10; j++) {
    probel = probel + ' ';
    pic = pic + '**';
    probArr[j] = probel;
    picArr[j] = pic;
  }
  console.log(probel + ' * ' + probel);
  for (k = 9, kk = 0; k >= 0; k--, kk++) {
    //  console.log(probArr[k] + picArr[kk] + probArr[k], ' это k', k, 'это kk', kk);
  }
}

//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
//При помощи цикла for выведите чётные числа от 2 до 10 включительно
//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
let arrC = [];
for (i = 5, arI = 0; i <= 10; i++, arI++) {
  arrC[arI] = i;
}
console.log(arrC);

function sayHello(name) {
  let hellow = 'привет' + name + '!';
  console.log(hellow, 'вызов внутри _----');
  return 'привет' + name + '!';
}
//sayHello('ИМя_первый вызов функции ');
console.log(sayHello('Имя2 '));

function massNum(oneNum) {
  let arrNum = [];
  arrNum = [
    {
      oneMin: oneNum - 1,
      oneN: oneNum,
      onePlus: oneNum + 1,
    },
  ];
  console.log(arrNum);
  return arrNum;
}
console.log(massNum(10));

const calculateVolumeAndArea = (dlinarebra) => {
  if (typeof dlinarebra !== typeof 1) {
    console.log('ERROR', dlinarebra);
  } else {
    let ObiemKuba = dlinarebra * dlinarebra * dlinarebra;
    let PloshadKuba = dlinarebra * dlinarebra * 6;
    console.log('Обьем куюа равен ', ObiemKuba, ' Площадь поверхности куба равна ', PloshadKuba);
  }
};
//calculateVolumeAndArea(22);

const Poezd = (biletNomer) => {
  let kartapoezda = [];
  f = 1;
  for (i = 0; i >= 0, i < 36; i++) {
    kartapoezda[i] = i + 1;
    f++;
  }
  console.log(kartapoezda);
  if (biletNomer > f) {
    console.log('ERROR bileta net');
  } else {
    console.log('ВАШЕ КУПЕ НОМЕР_', Math.ceil(biletNomer / 4));
  }
};
Poezd(5);
