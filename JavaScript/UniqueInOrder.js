
const uniqueInOrder = (sequence) => {
    return [...sequence].filter( (val, i, array) => (i > 0)? val != array[i-1] : val != '' );
}

