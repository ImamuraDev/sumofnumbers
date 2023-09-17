function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  while (arr.length > 0) {
    sum += arr.pop();
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length < 1) {
    return 0;
  }
  const val = arr.pop();
  return val + sumRecursion(arr);
}

function sumTheSimpleWay(arr) {
  const sum = _.reduce(arr, function (memo, num) { return memo + num; }, 0);
  return sum;
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]));
console.log(sumTheSimpleWay([1, 2, 3]));
