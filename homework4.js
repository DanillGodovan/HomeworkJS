// 1) my forEach

  let arr = [1, 5, 4, 2, 6]

 function forEach(array, callback) {
   for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
 }

forEach(arr) // перелистывает весь маассив

 // 2) myMap

  function myMap (array, callback) {
    var returnvalue = []
    for (var i = 0; i < array.length;  i++) {
        var newElements = callback(array[i], i, array)
        returnValue.push(newElements)
    }
    return returnValue
  }

  myMap(arr)

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
