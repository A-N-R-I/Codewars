const getBit = (n, pos) => (BigInt(n) >> BigInt(pos)) & 1n;
// Counts the number of bits in an integer that are 1
const countBits = function(n) {
    let sum = 0n;
    let len = Math.floor(Math.log2(n)) + 1;

    for (let i = 0; i < len; ++i)
        sum += getBit(n, i);
    
    return Number(sum);
}

// Tests
console.log(countBits(19), countBits(2**53 - 1), countBits(Number.MAX_SAFE_INTEGER));
console.log((Math.log2(Number.MAX_SAFE_INTEGER)))