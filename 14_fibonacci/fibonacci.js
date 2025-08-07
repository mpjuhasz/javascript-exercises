const fibonacci = function(n) {
    if (n == 0) {
        return 0;
    }
    else if (n < 0) {
        return "OOPS";
    }
    let s1 = 1;
    let s2 = 1;
    if (n < 3) {
        return 1;
    }
    else {
        let i = 0;
        while (i < n - 2) {
            [s1, s2] = [s2, s1 + s2];
            i++;
        }
        return s2;
    }

};

// Do not edit below this line
module.exports = fibonacci;
