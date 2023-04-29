function squareDigits(num){
    let sqr = "";

    while (num > 0) {
        sqr = (num%10)**2 +  sqr;
        num = Math.floor(num/10);
    }

    return parseInt(sqr) || 0;
}