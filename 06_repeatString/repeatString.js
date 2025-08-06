const repeatString = function(text, numberRepeat) {
    if (numberRepeat < 0) {
        return "ERROR";
    }
    let strArr = [];
    for (let i = 0; i < numberRepeat; i++) {
        strArr.push(text);
    }
    return strArr.join("");
};

// Do not edit below this line
module.exports = repeatString;
