function sortedFrequency(arr, target) {
  const firstIndex = findFirst(arr, target);
  const lastIndex = findLast(arr, target);

  if (firstIndex === -1 || lastIndex === -1) {
    return -1;
  }
  return lastIndex - firstIndex + 1;
}

function findFirst(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let firstIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      firstIndex = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return firstIndex;
}

function findLast(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let lastIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      lastIndex = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastIndex;
}

module.exports = sortedFrequency;
