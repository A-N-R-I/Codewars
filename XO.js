// returns 
function XO(str) {
    let xo = 0;

    [...str].forEach((a) => xo += ((a = a.toLowerCase()) == 'x')? 1 : (a == 'o')? -1 : 0);

    return xo == 0;
}