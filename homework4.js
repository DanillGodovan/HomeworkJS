// 1) my forEach

  let arr = [1, 5, 4, 2, 6]

  Array.prototype.myEach = function(callback) {
     for (var i = 0; i < this.length; i++)
         callback(this[i], i, this);
 };

 arr.forEach(function(word) {
     console.log(word);
 }); // перелистывает весь маассив

 // 2) myMap

 Array.prototype.myMap = function(callback) {
   arr = [];
   for (var i = 0; i < this.length; i++)
       arr.push(callback(this[i], i, this));
   return arr;
};

//tests
var arrs = ['math', 'is', 'so', 'cool'];
var numbers2 = [1, 4, 9];

var goodMath = arrs.myMap(function(n) {
   return n;
});

var squareRoot = numbers2.myMap(function(num) {
   return Math.sqrt(num);
});

console.log(goodMath); // ['math', 'is', 'so', 'cool']
console.log(squareRoot); // [1, 2 ,3]

  // 3) mySort

       // сортировка по порядку
       Array.prototype.mySort = function(composer) {
       		let output = this.slice(0);
       		while (true) {
       			for (var i = 0; i < output.length; i++) {

       			}
       		}
       	};
       	console.log(" ".codePointAt(0));
