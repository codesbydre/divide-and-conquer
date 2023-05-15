function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] === 0) {
    return arr.length; // If first element 0, all elements are 0
  }

  if (arr[right] === 1) {
    return 0; // If last element 1, there are no zeroes
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1 && arr[mid + 1] === 0) {
      return arr.length - mid - 1;
    }

    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

// Search for transition point where 1 changes to 0 using binary search

module.exports = countZeroes;
