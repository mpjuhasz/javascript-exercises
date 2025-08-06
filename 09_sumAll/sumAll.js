const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        let minmax = [a, b].sort();
        let sum = 0;
        for (let i = minmax[0]; i <= minmax[1]; i++) {
            sum += i;
        };
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
