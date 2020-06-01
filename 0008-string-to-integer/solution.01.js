/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {    
    let i = 0, num = 0, sign = 1
    const MIN = -2147483648, MAX = 2147483647
    
    while (str[i] && str[i] === ' ') {
        i++
    }
    
    if (str[i] === '+' || str[i] === '-') {
        sign = str[i++] === '-' ? -1 : 1
    }
    
    while (str[i] && str[i].charAt() <='9' && str[i].charAt() >= '0') {
        num = num * 10 + (str[i++] - '0')
        if (sign * num <= MIN) {
            return MIN
        } else if (sign * num >= MAX) {
            return MAX
        }
    }
    
    return sign * num
};

