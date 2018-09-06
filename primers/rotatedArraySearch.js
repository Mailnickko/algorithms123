/*
	If you have a sorted array, a rotated version of that array is the sorted array rotated some number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array has a single pivot point where the groups of values to the left and right are sorted, but the sorting does not continue accross the pivot.

	Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array.
*/

const rotatedArraySearch = (rotated, target) => {
  if (!Array.isArray(rotated) || isNaN(target)) {
    return null;
  }
  let start = 0;
  let end = rotated.length - 1;

  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (rotated[mid] === target) {
      return mid;
    }

    if (rotated[start] < rotated[mid]) {
      if (rotated[mid] <= target && target < rotated[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (rotated[mid] <= target && target < rotated[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

module.exports = rotatedArraySearch;
