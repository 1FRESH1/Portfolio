# Technical Documentation for Users - Project "All Numbers"

## I. Introduction

This documentation is intended for end users and aims to provide an understanding of how to use the AllNumbers function. This function processes an array of numbers and calculates the minimum, maximum, and average values.

## II. Table of Contents

III. **Function Description**

IV. **Usage Example**

V. **User Recommendations**

VI. **Summary**

## III. Function Description

The AllNumbers function processes the provided array of numbers and returns an object containing the minimum, maximum, and average values of those numbers. The function works as follows:

**Input Parameter:**

numbers: An array of random numbers from which the values will be determined.

**Return Value:**

An object containing the following fields:
- smallest: The smallest number in the array.
- largest: The largest number in the array.
- average: The arithmetic average of all numbers in the array.

## IV. Usage Example

```javascript
/**
 * The function `AllNumbers` goes through an array and returns the smallest, highest, and average of
 * all numbers.
 * @param {numbers} array with random numbers.
 * @return {object} object with the result of the `AllNumbers` function.
 * The result is logged into the console.
 */
let numbers = [1, 4, 17, 7, 77, 177];
let average = 0;

function AllNumbers(nums) {
  nums.filter((num) => num === Math.max(...nums));
  nums.filter((num) => num === Math.min(...nums));
  nums.forEach((num) => {
    average += num;
  });
  nums = average / numbers.length;
  return nums;
}

const result = AllNumbers(numbers);
console.log(result);