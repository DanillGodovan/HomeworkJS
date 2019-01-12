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
       var arr3 = [3, 7, 1, 5, 8]
       Array.prototype.mySort = function()
       {
       var is_sorted = false;
        while (!is_sorted)
        {
           is_sorted = true;
           for (var n = 0; n < this.length - 1; n++)
           {
             if (this[n] > this[n+1]){
               var x = this[n+1];
               this[n+1] = this[n];
               this[n] = x;
               is_sorted = false;
             }
           }
         }
         return this;
       };

 let arr2 = arr3.mySort()
console.log(arr2)
