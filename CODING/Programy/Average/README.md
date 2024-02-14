# Technical Documentation for `WszystkieLiczby` Function

## I. Introduction

The `WszystkieLiczby` function is designed to process an array of numbers and calculate the smallest, largest, and average values.

## II. Table of Contents

III. **Function Description**

IV. **Usage Example**

V. **Function Code**

VI. **Author**

## III. Function Description

The `WszystkieLiczby` function processes the provided array of numbers and returns an object containing the smallest, largest, and average values. The function works as follows:

**Input Parameter:**

- `licz`: An array of random numbers from which the values will be determined.

**Return Value:**

- An object containing the smallest, largest, and average values from the array.

## IV. Usage Example

```javascript
let liczby = [1, 4, 17, 7, 77, 177];
const wynik = WszystkieLiczby(liczby);
console.log(wynik);  // Logs an object with the smallest, largest, and average values from the `liczby` array to the console.V. Function Code

## V. Function Code
export function WszystkieLiczby(licz) {
  let najwieksza = Math.max(...licz);
  let najmniejsza = Math.min(...licz);
  let srednia = 0;
  licz.forEach((num) => {
    srednia += num;
  });
  srednia = srednia / licz.length;
  return {
    najwieksza: najwieksza,
    najmniejsza: najmniejsza,
    srednia: srednia
  };
}

## VI. Author
This function was created by Grzegorz Skalski.
```
