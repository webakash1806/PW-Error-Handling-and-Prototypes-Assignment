function numberChecker(arr) {
    return function (numToCheck) {
        return arr.includes(numToCheck)
    }
}

let checktheNumber = new numberChecker([1, 2, 3, 4, 5, 8, 9])
console.log(checktheNumber(3));
console.log(checktheNumber(3, 5));
console.log(checktheNumber(3 && 11))
console.log(checktheNumber(10))