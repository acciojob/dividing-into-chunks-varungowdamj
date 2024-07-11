const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      // If adding the current element exceeds the sum, push the current subarray to the result
      result.push(currentSubarray);
      // Start a new subarray
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    } else {
      // Else, add the current element to the subarray
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    }
  }

  // Add the last subarray if it has elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));