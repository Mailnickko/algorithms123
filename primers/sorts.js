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

// Merge Sort

// Radix Sort

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
