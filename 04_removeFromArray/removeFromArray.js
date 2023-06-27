const removeFromArray = function(array, ...args) {
    let new_array = []
    array.forEach(element => {
        if(!args.includes(element)){
            new_array.push(element)
        }
    });
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
