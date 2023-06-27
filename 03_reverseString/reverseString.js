const reverseString = function(text = "") {
    let reverse_text = ""
    for (let char = text.length-1; char >= 0; char--){
        reverse_text += text[char]
    };
    return reverse_text;
};

// Do not edit below this line
module.exports = reverseString;
