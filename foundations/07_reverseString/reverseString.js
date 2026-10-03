const reverseString = function(str) {
    let rev = ""
    for (let i = 1; i <= str.length; i++) {
        rev = rev + str[str.length - i]
    }
    
    return rev

};

// Do not edit below this line
module.exports = reverseString;
