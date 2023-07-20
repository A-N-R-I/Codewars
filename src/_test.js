let n = 0;      // ..00000001   1
let m = ~n;     // ..11111110   -2

const getBit = (n, pos) => (n >> pos) & 1;

console.log(m, getBit(m, 0), Number.MAX_SAFE_INTEGER);