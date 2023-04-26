const multiply = a => b => a * b
console.log(multiply(10)(32.4));
const map = mapper => array => {
const mappedArray = []
for (let i = 0; i <
array.length; i++) {
mappedValue =
mapper(array[i])
mappedArray.push(mappedValue)
}
return mappedArray
}
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [122, 230, 430,
140, 9.50];
const multiplyAllBy10 =
map(multiply(10));
console.log(multiplyAllBy10(numbers
1));
console.log(multiplyAllBy10(numbers
2));
// ####################