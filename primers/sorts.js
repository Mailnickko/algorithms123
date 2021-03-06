// Bubble Sort

const bubbleSort = arr => {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }

  return swapped ? bubbleSort(arr) : arr;
};

// Selection Sort

const selectionSort = arr => {
  let min;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

// Insertion Sort

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
};

// Quick Sort
const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, partitionIndex, end);
  return partitionIndex;
};

const quickSortInPlace = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let partitionIndex = partition(arr, left, right);
    quickSortInPlace(arr, left, partitionIndex - 1);
    quickSortInPlace(arr, partitionIndex + 1, right);
  }
  return arr;
};

// Merge Sort

// Radix Sort

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  quickSortInPlace
};
