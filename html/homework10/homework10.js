// first paragraph
// Чему равно свойство после delete?
var animal = {
  jumps: null
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

alert( rabbit.jumps ); // ? true

delete rabbit.jumps;

alert( rabbit.jumps ); // null

delete animal.jumps;

alert( rabbit.jumps ); // undefined

// Сработает ли вызов rabbit.eat() ?
var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat(); // yes, in rabbit
//Алгоритм для поиска
// Есть обьекты:
var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};
/*Задание состоит из двух частей:

Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.

То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
*/
//answer
var head = {
  glasses: 1
};

var table = {
  pen: 3
};
table.__proto__ = head
var bed = {
  sheet: 1,
  pillow: 2
};
bed.__proto__ = table
var pockets = {
  money: 2000
};
pockets.__proto__ = bed
console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined
// second paragraph
/*В примерах ниже создаётся объект new Rabbit, а затем проводятся различные действия с prototype.

Каковы будут результаты выполнения? Почему?

Начнём с этого кода. Что он выведет?*/
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

alert( rabbit.eats ); // true
//Добавили строку , что будет теперь?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );// true
//А если код будет такой? (заменена одна строка):
function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false
// А такой? (заменена одна строка)
function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete rabbit.eats; // (*)

alert( rabbit.eats ); //true
//И последний вариант:
function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

alert( rabbit.eats ); // undefined
/*
Аргументы по умолчанию
важность: 4
Есть функция Menu, которая получает аргументы в виде объекта options:

 options содержит настройки меню: width, height и т.п.
function Menu(options) {
  ...
}
Ряд опций должны иметь значение по умолчанию. Мы могли бы проставить их напрямую в объекте options:

function Menu(options) {
  options.width = options.width || 300; // по умолчанию ширина 300
  ...
}
…Но такие изменения могут привести к непредвиденным результатам, т.к. объект options может быть повторно использован во внешнем коде. Он передается в Menu для того, чтобы параметры из него читали, а не писали.

Один из способов безопасно назначить значения по умолчанию – скопировать все свойства options в локальные переменные и затем уже менять. Другой способ – клонировать options путём копирования всех свойств из него в новый объект, который уже изменяется.

При помощи наследования и Object.create предложите третий способ, который позволяет избежать копирования объекта и не требует новых переменных.
*/
function Menu(options) {
  option = Object.create(options);
  option.width = 300;

  alert("width: " + option.width);
  alert("height: " + option.height);
}

var option = {
  width: 400,
  height: 100
};

var menu = new Menu(option);

alert("new width: " + option.width);
alert("new height: " + option.height);

//Создадим новый объект, вот такой:
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
};

var rabbit = new Rabbit("Rabbit");
// Одинаково сработают вызовы?
rabbit.sayHi(); // Rabbit работает везде
Rabbit.prototype.sayHi(); // undefined  работает везде
Object.getPrototypeOf(rabbit).sayHi(); // undefined во всех кроме IE8-
rabbit.__proto__.sayHi(); // undefined  во всех кроме всех IE-
//Все ли они являются кросс-браузерными? Если нет – в каких браузерах сработает каждый?
/*Пусть у нас есть произвольный объект obj, созданный каким-то конструктором, каким – мы не знаем, но хотели бы создать новый объект с его помощью.

Сможем ли мы сделать так?*/
var obj2 = new obj.constructor(); // yes
// Приведите пример конструкторов для obj, при которых такой код будет работать верно – и неверно.
function Machine(name) {
  this.name = name;
}

var obj = new Machine('Delta');
var obj2 = new obj.constructor('beta');

alert( obj2.name ); // beta, working

function Machine1(name) {
    this.name = name;
  }
Machine1.prototype = {};

var obj = new Machine1('Delta');
var obj2 = new obj.constructor('Beta');

alert( obj2.name ); // undefined
// third paragraph
/*Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

После этого должен работать такой код:
function f() {
  alert( "привет" );
}
f.defer(1000);*/
//answer
function f() {
  alert( "привет" );
}
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}
f.defer(1000);
/*
Добавить функциям defer с аргументами
важность: 4
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:*/
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);
//answer
Function.prototype.defer = function(ms) {
  var f = this;
  return function() {
    var args = arguments,
      context = this;
    setTimeout(function() {
      f.apply(context, args);
    }, ms);
  }
}
// fourth paragraph
/*Есть класс CoffeeMachine, заданный в функциональном стиле.

Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

Исходный код:*/

function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
// answer
function CoffeeMachine(power) {
  this.power = power
  this.waterAmount = 0;

}
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype.getTimeToBoil = function() {
return this.waterAmount  this.WATER_HEAT_CAPACITY  80 / this.power;
};

  CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, this.getTimeToBoil());
  };

  CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this.waterAmount = amount;
  };



var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
/*Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").

Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.

Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.

В чём дело? Как поправить?*/
function Hamster() {}

Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
//answer
function Hamster() {
  this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert(speedy.food.length) // 2
alert(lazy.food.length) // 0
// fifth paragraph
/*Найдите ошибку в наследовании
важность: 5
Найдите ошибку в прототипном наследовании. К чему она приведёт?*/
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert( "ходит " + this.name );
};

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = Animal.prototype; // error

Rabbit.prototype.walk = function() {
  alert( "прыгает! и ходит: " + this.name );
};
// answer
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert( "ходит " + this.name );
};

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает! и ходит: " + this.name );
};

/*Найдите ошибку в наследовании
важность: 5
Найдите ошибку в прототипном наследовании. К чему она приведёт?*/

function Animal(name) {
  this.name = name;

  this.walk = function() { // error
    alert( "ходит " + this.name ); // error
  }; // error

}

function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();
// answer
function Animal(name) {
  this.name = name;
}
 Animal.prototype.walk = function() {
   alert( "ходит " + this.name );
 };
function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();


/*Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные свойства timer, template и метод render.

Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.

P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).*/


function Clock(options) {
  this.templ = options.templ;
}

Clock.prototype.render = function() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this.template.replace('h', hours).replace('min', min).replace('sec', sec);

  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this.timer);
};

Clock.prototype.start = function() {
  this.render();
  var self = this;
  this.timer = setInterval(function() {
    self.render();
  }, 1000);
};

/*Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.

Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
Исходный класс Clock менять нельзя.
Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.
P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).*/

function Clock(options) {
  this.templ = options.templ;
}

Clock.prototype.render = function() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this.template.replace('h', hours).replace('min', min).replace('sec', sec);

  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this.timer);
};

Clock.prototype.start = function() {
  this.render();
  var self = this;
  this.timer = setInterval(function() {
    self.render();
  }, 1000);
};
function UpgradedClock(options) {
  Clock.apply(this, arguments);
  this.precision = +options.precision || 1000;
}

UpgradedClock.prototype = Object.create(Clock.prototype);

UpgradedClock.prototype.start = function() {
  this.render();
  var self = this;
  this.timer = setInterval(function() {
    self.render();
  }, this.precision);
};// I don't know it work or no
/*Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.

Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.

При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру, открытие завершается вызовом open() родителя.
Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.*/
function Menu(state) {
  this.state = state || this.STATE_CLOSED;
};

Menu.prototype.STATE_OPEN = 1;
Menu.prototype.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._tate = this.STATE_OPEN;
};

Menu.prototype.close = function() {
  this.state = this.STATE_CLOSED;
};

Menu.prototype.stateAsString = function() {
  switch (this._state) {
    case this.STATE_OPEN:
      return 'open';

    case this.STATE_CLOSED:
      return 'closed';
  }
};

Menu.prototype.showState = function() {
  alert(this.stateAsString());
}

function AnimatingMenu() {
      Menu.apply(this, arguments);
    }

    AnimatingMenu.prototype = Object.create(Menu.prototype);

    AnimatingMenu.prototype.state_animating = 2;

    AnimatingMenu.prototype.open = function() {
      var self = this;

      this.state = this.state_animating;

      this.timer = setTimeout(function() {
        Menu.prototype.open.call(self);
      }, 1000);
    };

    AnimatingMenu.prototype.close = function() {
      clearTimeout(this.timer);
      Menu.prototype.close.apply(this);
    };

    AnimatingMenu.prototype.stateAsString = function() {

      switch (this.state) {
        case this.state_animating:
          return 'animation';

        default:
          return Menu.prototype.stateAsString.call(this);
      }
    };

    var menu = new AnimatingMenu();

    menu.showState();

    menu.open();
    menu.showState();

    setTimeout(function() {
      menu.showState();

      menu.close();
      menu.showState();
    }, 1000);
    //fifth paragraph
    /*Странное поведение instanceof
важность: 5
Почему instanceof в коде ниже возвращает true, ведь объект a явно создан не B()?*/
function A() {}

function B() {}

A.prototype = B.prototype = {};

var a = new A();

alert( a instanceof B ); // true
/*
 instanceOf смотрит на  prototype и сравнивает его с цепочкой __proto__ объекта.То есть a.__proto__ == B.prototype // true*/
/*Что выведет instanceof?
важность: 5
В коде ниже создаётся простейшая иерархия классов: Animal -> Rabbit.

Что выведет instanceof?

Распознает ли он rabbit как Animal, Rabbit и к тому же Object?*/
function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit instanceof Rabbit );// true
alert( rabbit instanceof Animal );// true
alert( rabbit instanceof Object );// true
//sixth paragraph
/*Унаследуйте от SyntaxError
важность: 5
Создайте ошибку FormatError, которая будет наследовать от встроенного класса SyntaxError.

Синтаксис для её создания – такой же, как обычно:*/


function FormatError(mess) {
  this.name = "formatError";

  this.mess = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("Formatation error");

alert( err instanceof SyntaxError );

alert( err.stack );
alert( err.name );
alert( err.message );
