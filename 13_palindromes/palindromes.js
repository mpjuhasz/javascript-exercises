const palindromes = function (s) {
    console.log(normalise(s));
    return normalise(s) == normalise(s.split("").reverse().join(""));
};

function normalise(s) {
    return s.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
