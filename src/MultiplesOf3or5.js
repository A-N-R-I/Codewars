function solution(number) {
    if (number < 0) return 0;

    const n = (x) => Math.floor((number - 1)/x);
    const s = (nth, x) => nth/2 * (x * (nth + 1));

    // Sum of three's + sum of five's - sum of (three's and five's) = sum of (three's only, five's only, and [three's and five's only])
    return s(n(3), 3) + s(n(5), 5) - s(n(15), 15);
}

// Testing
console.log(solution(10));  // 23
console.log(solution(16));  // 60
console.log(solution(-95)); // 0