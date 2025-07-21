function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Find the smallest element in the remaining array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller element was found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
let nums = [4, 1, 3, 9, 7];
console.log("Sorted Array:", selectionSort(nums));
