/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0
    let length = 0
    const map = { }
    
    while (i < s.length && j < s.length) {
        if (!map[s[j]]) {
            map[s[j++]] = true
        } else {
            map[s[i++]] = false
        }
        length = Math.max(length, j - i)
    }
    
    return length
}

