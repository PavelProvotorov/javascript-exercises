const fibonacci = function(idx) {
    idx = parseInt(idx)
    if (Math.sign(idx) === -1){
        return "OOPS"
    }

    let num_a = 0
    let num_b = 1
    let num_c = idx

    for(let i = 1; i < idx; i++){
        num_c = num_a + num_b
        num_a = num_b
        num_b = num_c
    }
    return num_c
};

// Do not edit below this line
module.exports = fibonacci;
