function findShort(s) {
    let min = Number.MAX_VALUE;

    s.split(' ').forEach(v => min = Math.min(min, v.length));
    return min;
}