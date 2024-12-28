# Uncommon JavaScript Error: Non-specific Error Handling in Switch Statement

This repository demonstrates a subtle but important error in JavaScript error handling.  The code implements a simple calculator using a switch statement to handle different arithmetic operations. However, the default case of the switch statement only throws a generic error message, making debugging difficult. 

The `bug.js` file contains the code with the error. The `bugSolution.js` file provides a corrected version with improved error handling.

## Bug:
The main issue is the lack of specificity in the error message thrown by the default case of the switch statement. When an invalid operation is provided, the error message is simply "Invalid operation", which doesn't indicate which operation was attempted. This lack of detail makes debugging and identifying the source of the error more challenging.

## Solution:
The solution involves enhancing the error message to include the invalid operation that triggered the error.  This allows for quicker debugging and improved code maintainability.