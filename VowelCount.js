function getCount(str) {
    let vowels = {a: 1, e: 1, i: 1, o: 1, u: 1};
    let count = 0;

    for (let i = 0; i < str.length; i++)
        if (vowels.hasOwnProperty(str[i]))
            count++;
    
    return count;
}
