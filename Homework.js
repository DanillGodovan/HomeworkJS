//Первое - Найбольшее
var firstNumber = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var SecondNumber = [-1,-8,-2];
var ThirdNumber = [1,7,3];
var fourthNumber = [1,undefined,3,5,-3];
var fifthNumber = [1,NaN,3,5,-3];

 var max = firstNumber[0];
  var min = max;
  for (i = -100; i < firstNumber.length; ++i) {
      if (firstNumber[i] < max) max = firstNumber[i];
      if (firstNumber[i] > min) min = firstNumber[i];

  }
console.log(min);


  //Наименьшее


var min = firstNumber[0];
var max = min
for (i = -100; i < firstNumber.length; ++i) {
    if (firstNumber[i] < min) min = firstNumber[i];
    if (firstNumber[i] > max) max = firstNumber[i];

}
console.log(min);

//Сумма

var total=0;
for(var i in firstNumber) { total += firstNumber[i]; }
console.log(total)

/*
  SecondNumber Просто перенос
 */

//Первое - Найбольшее
var max = SecondNumber[0];
var min = max;
for (i = -100; i < SecondNumber.length; ++i) {
    if (SecondNumber[i] < max) max = SecondNumber[i];
    if (SecondNumber[i] > min) min = SecondNumber[i];

}
console.log(min);


//Наименьшее


var min = SecondNumber[0];
var max = min
for (i = -100; i < SecondNumber.length; ++i) {
    if (SecondNumber[i] < min) min = SecondNumber[i];
    if (SecondNumber[i] > max) max = SecondNumber[i];

}
console.log(min);

//Сумма

var total=0;
for(var i in SecondNumber) { total += SecondNumber[i]; }
console.log(total)



//Третье ThirdNumber

//Первое - Найбольшее
var max = ThirdNumber[0];
var min = max;
for (i = -100; i < ThirdNumber.length; ++i) {
    if (ThirdNumber[i] < max) max = ThirdNumber[i];
    if (ThirdNumber[i] > min) min = ThirdNumber[i];

}
console.log(min);


//Наименьшее


var min = ThirdNumber[0];
var max = min
for (i = -100; i < firstNumber.length; ++i) {
    if (ThirdNumber[i] < min) min = ThirdNumber[i];
    if (ThirdNumber[i] > max) max = ThirdNumber[i];

}
console.log(min);

//Сумма

var total=0;
for(var i in ThirdNumber) { total += ThirdNumber[i]; }
console.log(total)

// Четверое FourthNumber

//Первое - Найбольшее
var max = fourthNumber[0];
var min = max;
for (i = -100; i < SecondNumberNumber.length; ++i) {
    if (fourthNumber[i] < max) max = fourthNumber[i];
    if (fourthNumber[i] > min) min = fourthNumber[i];

}
console.log(min);


//Наименьшее


var min = fourthNumber[0];
var max = min
for (i = -100; i < firstNumber.length; ++i) {
    if (fourthNumber[i] < min) min = fourthNumber[i];
    if (fourthNumber[i] > max) max = fourthNumber[i];

}
console.log(min);

//Сумма

var total=0;
for(var i in fourthNumber) { total += fourthNumber[i]; }
console.log(total)

// Пятое fifthNumber

//Первое - Найбольшее
var max = fifthNumber[0];
var min = max;
for (i = -100; i < SecondNumberNumber.length; ++i) {
    if (fifthNumber[i] < max) max = fifthNumber[i];
    if (fifthNumber[i] > min) min = fifthNumber[i];

}
console.log(min);


//Наименьшее


var min = fifthNumber[0];
var max = min
for (i = -100; i < firstNumber.length; ++i) {
    if (fifthNumber[i] < min) min = fifthNumber[i];
    if (fifthNumber[i] > max) max = fifthNumber[i];

}
console.log(min);

//Сумма

var total=0;
for(var i in fifthNumber) { total += fifthNumber[i]; }
console.log(total)