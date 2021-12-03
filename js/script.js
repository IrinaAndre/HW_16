const arr = [1, 2, 3, -1, -2, -3];

function iterating(arr) {
  const newArr = [];

  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        newArr.push(arr[i]);
      }
    }

    if (newArr.length == 0) {
      return null;
    }
    return newArr;
  }
  return "Empty array";
}
let resultArr = iterating(arr);
console.log(resultArr);
