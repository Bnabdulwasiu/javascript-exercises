const sumAll = function(first_num, second_num) {
    //would work on the arguments, regardless of the arrangement of the arguments
    //bigger or smaller one firstB
    var sum = 0;
    if (!Number.isInteger(first_num) || !Number.isInteger(second_num)) return "ERROR"
    if (first_num<0 || second_num<0) return "ERROR";
    if (first_num > second_num){
        [first_num , second_num] = [second_num, first_num]
    }
    for(let i=first_num; i<=second_num; i++){
        sum += i;
    }
    return sum
};

console.log(sumAll(4, 2))

// Do not edit below this line
module.exports = sumAll;
