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

// Quick Sort

// Merge Sort

// Radix Sort

module.exports = {
  bubbleSort
};
