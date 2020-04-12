/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const uniqueValueSum = ([...new Set(nums)]).reduce((sum, item) => sum + item, 0)
    const allValueSum = nums.reduce((sum, item) => sum + item, 0)
    return ((uniqueValueSum * 3) - allValueSum) / 2
}
