function findRotatedIndex(arr, target) {
  const pivot = findPivot(arr);

  if (arr[pivot] === target) {
    return pivot;
  }

  if (pivot === 0) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }

  if (target < arr[0]) {
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
  }

  return binarySearch(arr, target, 0, pivot - 1);
}

function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function binarySearch(arr, target, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

module.exports = findRotatedIndex;
