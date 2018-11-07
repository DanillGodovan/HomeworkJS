// 1) my forEach

  let arr = [1, 5, 4, 2, 6]

 function forEach(array, callback) {
   for (var i = 0; i < arr.length; i++) {
            callback(this[i], i, this);
        }
 }

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

  function msort(arr){
    for(var i = 0;i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if( arr[i] > arr[j] ){
                var swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
return arr;
}     // сортировка по порядку
 msort(arr)
