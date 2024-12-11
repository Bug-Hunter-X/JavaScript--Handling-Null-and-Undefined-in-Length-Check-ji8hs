# JavaScript: Handling Null and Undefined in Length Check

This repository demonstrates a common JavaScript error related to handling null and undefined values when checking the length of an object or array.  The original code fails when an undefined value is passed. The solution provides a more robust approach to handle both cases gracefully.

## Bug
The original `foo` function only explicitly checks for `null`. When `undefined` is passed, it throws a `TypeError`.  This is a common error when dealing with potentially missing data.

## Solution
The solution modifies the function to explicitly check for both `null` and `undefined` using a concise conditional operator. This ensures the function handles both scenarios correctly and avoids runtime errors. 
