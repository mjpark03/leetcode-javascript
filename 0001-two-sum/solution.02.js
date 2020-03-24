/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length <= 1)
        return null
    
    const diffMap = []
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        
        if (diff in diffMap) {
            return [diffMap[diff], i]
        }
        
        diffMap[nums[i]] = i
    }
    
    return null
};
