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
  callback(min, max, sum )
  }

arrayManipulation(arr) // why it return prototype object?


//2) подзадание




arrayManipulation(function (max, min, sum) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log("callback called! " + arrayManipulation); // but it has write in console the array.find not a function?
});
