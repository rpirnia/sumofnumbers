"use strict";
// Takes a list of numbers and returns the sum of those numbers
function sumFor(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(sumFor([1, 2, 3, 4])); // 10
function sumWhile(nums) {
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4])); // 10
function sumRecursion(nums) {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1));
}
console.log(sumRecursion([1, 2, 3, 4])); // 10
function sumTheFunctionalWay(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum;
}
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // 10
