
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

let height = [7, 0, 1, 3, 4, 1, 2, 1];
let water = 0;

height.sort(compareNumeric);

if (height[0] >= height[1] || height[0] <= height[1]) {
  let water = 1
  console.log(water)
}
if (height[2] >= height[1] || height[2] <= height[1]) {
  let water = 3
  console.log(water)
}
if (height[2] >= height[3] || height[2] <= height[3]) {
  let water = 4
console.log(water)
}
if (height[3] >= height[4] || height[3] <= height[4]) {
  let water = 5
  console.log(water)
}
if (height[4] >= height[5] || height[4] <= height[5]) {
  let water = 5
  console.log(water)
}
if (height[5] >= height[6] || height[5] <= height[6]) {
  let water = 7
  console.log(water)
}
if (height[6] >= height[7] || height[6] <= height[7]) {
  let water = 9
  console.log(water)
}
/*if (height[7] >= height[8] || height[7] <= height[8]) {
  let water = 16
  console.log(water)
}
if (height[8] >= height[9] || height[8] <= height[9]) {
  let water = 17
  console.log(water)
}
