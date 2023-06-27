const sumAll = function(min_number = 0, max_number = 0) {
    // Type check
    if ( typeof min_number !== "number" || typeof max_number !== "number"){
        return "ERROR";
    };
    
    // Negative value check
    if (min_number < 0 || max_number < 0){
        return "ERROR";
    };

    // Switch to largest int
    if (min_number > max_number){
        const temp_number = min_number;
        min_number = max_number;
        max_number = temp_number;
    };

    // Return total sum
    let total_sum = 0;
    for (let number = min_number; number <= max_number; number++){
        total_sum += number;
    };
    return total_sum;
};

// Do not edit below this line
module.exports = sumAll;
