const findTheOldest = function(arr) {
    return arr.reduce((p, c) => age(p) >= age(c) ? p : c);
};

function age(obj) {
    return (obj.yearOfDeath || new Date().getFullYear()) - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
