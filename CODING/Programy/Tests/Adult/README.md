user Function Tests

Description

This project contains unit tests for the functionality responsible for returning messages based on the input age to the user function.

Project Structure

script.js: File containing the user function responsible for returning messages based on the input age.

tests.js: File containing unit tests for the user function.

Tests

user should return correct messages based on age input:

For age 90, expected result should be "nie zywy/a!"

For age 25, expected result should be "pełnoletni/a!"

For age 15, expected result should be "nieletni/a"

For age 0, expected result should be "głuptaskiem, poniewaz jeszcze Cię nie ma na świecie!"

For age -5, expected result should be "głuptaskiem, poniewaz jeszcze Cię nie ma na świecie!"

For age "abc", expected result should be "Podaj tylko liczby, ciołku!"

Running Tests

To run the tests, open the tests.html file in a web browser and check the developer console.

Requirements

Web browser with support for the QUnit unit testing tool.

Author

This project was created by [Grzegorz Skalski].