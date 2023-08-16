const palindromes = function (string) {
    let string_original = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    let string_reverse = string_original.split("").reverse().join("")
    return string_original == string_reverse
};

// Do not edit below this line
module.exports = palindromes;
