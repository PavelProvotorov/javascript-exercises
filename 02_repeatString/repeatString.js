const repeatString = function(text, times) {
    let output = ""
    if (times < 0){
        output = "ERROR"
    } else {
        for (let i = 0; i < times; i++){
            output += text
        };
    };
    return output;
};

// Do not edit below this line
module.exports = repeatString;
