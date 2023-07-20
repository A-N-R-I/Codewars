function moveZeros(arr) {
    const array = arr.filter((a) => a !== 0);
    const size = arr.length - array.length;

    for (let i = 0; i < size; ++i)
        array.push(0);

    return array;
}


// Tests
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]