Technical Documentation for End Users - "Dog Age Calculator" Project

I. Introduction

This documentation is intended for end users and aims to provide an understanding of how to use the function for calculating a dog's age based on a human's age.

II. Table of Contents

III. Function Description

IV. Usage Example

V. User Recommendations

VI. Summary

III. Function Description

The function calculates the age of a dog based on a human's age according to the following rules:

- If the human's age is 1 year, the dog's age is equal to the value of the variable "pierwszyRok."
- If the human's age is 2 years, the dog's age is equal to the sum of the variables "pierwszyRok" and "drugiRok."
- In other cases, the dog's age is calculated using the formula: "pierwszyRok" + "drugiRok" + ("wiekCzłowieka" - 2) * "kolejneLata."

IV. Usage Example

```javascript
/**
 * Represents the age of a human.
 * @type {number}
 */
const wiekCzłowieka = 5;
const pierwszyRok = 15;
const drugiRok = 9;
const kolejneLata = 4;
let wiekPsa = 0;

if (wiekCzłowieka === 1) {
  wiekPsa = pierwszyRok;
} else if (wiekCzłowieka === 2) {
  wiekPsa = pierwszyRok + drugiRok;
} else {
  wiekPsa = pierwszyRok + drugiRok + (wiekCzłowieka - 2) * kolejneLata;
}

console.log(wiekPsa);
```

V. User Recommendations

- Customization: You can adjust the values of the variables "pierwszyRok," "drugiRok," and "kolejneLata" to your preferences.
- Parameter Change: Instead of directly assigning a value to the variable "wiekCzłowieka," you can dynamically retrieve this value from the user using an interactive form.

VI. Summary

The function for calculating a dog's age based on a human's age is a simple tool that can be useful for individuals wanting to convert their dog's age into human years. For any additional questions or issues related to using this function, we encourage you to consult the documentation or report the problem on the project's repository page.

Technical documentation for end users prepared by: 
Grzegorz Skalski
Date: 20.01.24