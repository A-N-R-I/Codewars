const mul = sn => (sn.length > 0)? (sn.charCodeAt(0)-48) * mul(sn.slice(1)) : 1;

function persistence(num) {
    let count = (num >= 10)? 1 : 0;

    while ((num = mul(`${num}`)) >= 10) count++;

    return count;
}

console.log(persistence(239));