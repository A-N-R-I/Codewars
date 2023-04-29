function divisors(integer) {
    let end = Math.floor(integer**0.5);
    let res = [];
    
    for (let i = 2; i <= end; i++) {
        if (integer%i === 0) {
            res.push(i);
            if (i <= end) end = integer/res[0];
        }
    }

    return (res.length > 0)? res : `${integer} is prime`;
}