//1) подзадание

let arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]
 function arrayManipulation (array) {
	let min = max = array.find(function (item) {
		if (isFinite(item) && +item === item) {
			return item
		}
	})
	let sum = 0
	array = array.filter(function (item) {
    if (typeof item === 'number') {
			if (item < min) {
				min = item
			}
			if (item > max) {
				max = item
			}
			sum += item
		}
		return item !== min && item !== max
	})

	 return {
	 	min,
	 	max,
	 	sum,
	 	array,

  }

   let arrInObj = new Object(min, sum, array);
   arrInObj["array"] = this.array.array;
   arrInObj["sum"] = this.array.sum;
   arrInObj["min"] = this.array.min;
   arrInObj["max"] = this.array.max;
   console.log(arrInObj)
  }

arrayManipulation(arr)

 alert(typeof arr);

//2) подзадание




arrayManipulation(function (max, min, sum) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log("callback called! " + arrayManipulation(arr)); // Но оно пишет что array.find not a function
});



// 3)

 let arr2 = [1, 5, 3, 8, 5, 4, 2, 5];
   function fromArrToObj() {

    let obj2 = new Object(arr2);



 obj2["1"] = arr2.forEach(function(item, i, arr) {
console.log( i + ": " + item + " (массив:" + arr2 + ")" );
});

    let obj3 = new Object();
    let i =  arr2.filter(function(number) {
    return number > 0;
    });
    obj3["2"] = obj2
console.log(Object.keys(obj3));

    return {
      obj2,
      obj3
    }
       }
   fromArrToObj(arr2)
