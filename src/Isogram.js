function isIsogram(str) {
    let obj = {};
    
    for (let i = 0; i < str.length; ++i) {
        let ch = str[i].toLowerCase();
        
        if (obj.hasOwnProperty(ch)) return false;
        obj[ch] = '';
    }
    
    return true;
}