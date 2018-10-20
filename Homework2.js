

var arr1 = [2, 1, 5];
var arr2 = [5, 0, 3, 4, 7];
var arr3 = [7, 2, 3, 1, 0];
var water1 = 0
var water2 = 0
var water3 = 0

if (arr1[0] > arr1[1] || arr1[2] > arr1[1] || arr1[2] > arr1[0]) {
   water1 = arr1[0] - arr1[1];
  console.log(water1)
} else if (arr1[2] < arr1[0]) {
  arr1.reverse()
   water1 = arr1[0] - arr1[1]
  console.log(water1)
}
if (arr2[0] > arr2[1] || arr2[2] > arr2[1]  || arr2[3] > arr2[2] || arr2[4] > arr2[0]) {
   water2 = arr2[0] - arr2[1] + arr2[0] - arr2[2] + arr2[0] - arr2[3]
  console.log(water2)
} else if (arr2[4] < arr2[0]) {
  arr1.reverse()
   water2 = arr2[0] - arr2[1] + arr2[0] - arr2[2] + arr2[0] - arr2[3]
  console.log(water2)
}
arr3.splice(4,4)
 if (arr3[0] > arr3[1] || arr3[2] > arr3[1] || arr3[0] > arr3[2] || arr3[0] > arr3[3]) {
   water3 = arr3[0] - arr3[1] - arr3[2] - arr3[3]

  console.log(water3);
} else if (arr3[0] < arr3[3]) {
  arr3.reverse();
   water3 = arr3[0] - arr3[1] - arr3[2] - arr3[3];

  console.log(water3);
}
var sum = water1 + water2 + water3;
console.log(sum);
