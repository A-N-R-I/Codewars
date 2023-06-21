const sum = (sn) => sn.length > 0? sn.charCodeAt(0)-48 + sum(sn.slice(1)) : 0;
const digitalRoot = (n) => (n/10 >= 1)? digitalRoot(sum(`${n}`)) : n;