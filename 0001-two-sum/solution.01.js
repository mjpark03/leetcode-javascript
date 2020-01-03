/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = []
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        
        if (diff in indexMap) {
            return [indexMap[diff], i]
        }
        
        indexMap[nums[i]] = i
    }
    
    return null
};
