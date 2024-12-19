"use strict";

const randomNumber = function () {
  return Math.floor(Math.random() * 100) + 1;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function guessNumber(num, attempts) {
  function askNumber() {
    if (attempts > 0) {
      const guessNum = prompt("Угадай число от 1 до 100");

      if (guessNum === null) {
        alert("Игра окончена.");
        return;
      }

      if (!isNumber(guessNum)) {
        alert("Введи число!");
        askNumber();
      } else if (Number(guessNum) > num) {
        attempts--;
        alert("Загаданное число меньше, осталось попыток " + attempts);
        askNumber();
      } else if (Number(guessNum) < num) {
        attempts--;
        alert("Загаданное число больше, осталось попыток " + attempts);
        askNumber();
      } else if (Number(guessNum) === num) {
        const restart = confirm(
          "Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?"
        );
        if (restart) {
          guessNumber(randomNumber(), 10);
        } else {
          return;
        }
      }
    } else if (attempts === 0) {
      const restart = confirm("Попытки закончились, хотите сыграть ещё?");
      if (restart) {
        guessNumber(randomNumber(), 10);
      } else {
        return;
      }
    }
  }

  askNumber();
}

guessNumber(randomNumber(), 10);
