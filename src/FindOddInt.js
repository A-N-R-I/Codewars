// 
function findOdd(intArray) {
    let map = {};

    for (i in intArray) {
        map[intArray[i]] = map[intArray[i]] != undefined? map[intArray[i]] + 1 : 1;
    }

    for (i in map) {
        if (map[i] % 2 != 0) return parseInt(i);
    }
}

// Tests
console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([0,1,0,1,0])); // 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));  // 4