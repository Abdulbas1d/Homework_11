// 1-Misol

// function getInitialOdds(n) {
//     let odds = [];
//     let currentOdd = 1;
//     for (let i = 0; i < n; i++) {
//       odds.push(currentOdd);
//       currentOdd += 2;
//     }
//     return odds;
//   }
  
//   console.log(getInitialOdds(5));





// 2-Misol

// function getEvenReverse(arr) {
//     const result = [];
//     for (let i = arr.length - 2; i >= 0; i -= 2) {
//       result.push(arr[i]);
//     }
//     return result;
//   }
  
//   const arr = [4, 5, 7, 8, 6, 9];
//   console.log(getEvenReverse(arr));





// 3-Misol

// function customOrder(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length / 2; i++) {
//       result.push(arr[i], arr[arr.length - 1 - i]);
//     }
//     if (arr.length % 2 !== 0) {
//       result.push(arr[Math.floor(arr.length / 2)]);
//     }
//     return result;
//   }
  
//   const arr = [4, 5, 7, 8, 6, 9];
//   console.log(customOrder(arr));






// 4-Misol

// function rangeSum(arr, k, l) {
//     if (K < 0  k >= arr.length  k > l) {
//         return "Invalid indices";
//     }
    
//     let sum = 0;
//     for (let i = k; i <= l; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(rangeSum(arr, 2, 5));







// 5-Misol


// function getSingleArr(arr) {
//     const uniqueNumbers = new Set();
//     const result = [];
    
//     for (let num of arr) {
//       if (!uniqueNumbers.has(num)) {
//         result.push(num);
//         uniqueNumbers.add(num);
//       }
//     }
    
//     return result;
//   }
  
//   let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
//   console.log(getSingleArr(arr)); 






// 6-Misol

// function swapMinMax(arr) {
//     let minIndex = 0;
//     let maxIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     let temp = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = temp;

//     return arr;
// }

// const inputArray = [7, 4, 9, 2, 3, 1, 5];
// const outputArray = swapMinMax(inputArray);

// console.log("Max:", Math.max(...outputArray));
// console.log("Min:", Math.min(...outputArray));
// console.log(outputArray);






// 7-Misol


// function cyclicallyShiftArray(arr) {
//     const shiftedArray = [];
//     const n = arr.length;
//     for (let i = 0; i < n; i++) {
//         shiftedArray[(i + 1) % n] = arr[i];
//     }
//     return shiftedArray;
// }

// const inputArray = [1, 5, 8, 9, 10];
// const outputArray = cyclicallyShiftArray(inputArray);
// console.log(outputArray);