function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (arr.length >= 2) {
      let elem = arr[i - 1] + arr[i - 2];
      arr.push(elem);
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function fibsRec(num, arr = [0, 1]) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return arr;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(num - 1, arr);
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const half = arr.length / 2;

  const leftArr = arr.slice(0, half);
  const rightArr = arr.slice(half);

  const leftSort = mergeSort(leftArr);
  const rightSort = mergeSort(rightArr);

  return merge(leftSort, rightSort);
}

function merge(left, right) {
  let leftIndex = 0,
    rightIndex = 0;
  let mergedArr = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  mergedArr = mergedArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  return mergedArr;
}

console.log(fibs(8));
console.log(fibsRec(8));

let myArr = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(myArr));

let myArr2 = [105, 79, 100, 110];
console.log(mergeSort(myArr2));
