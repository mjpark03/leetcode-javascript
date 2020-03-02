/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  nums = nums.sort(function(a, b) { return a - b })

  for (var index = 0; index < nums.length - 2; index++) {
    if (index > 0 && nums[index] === nums[index - 1]) continue

    var start = index + 1;
    var end = nums.length - 1;
    while (start < end) {
      const sum = nums[index] + nums[start] + nums[end]
      if (sum === 0) {
        result.push([nums[index], nums[start], nums[end]])
        start++
        end--

        while (start < end && nums[start] === nums[start - 1]) start++
        while (start < end && nums[end] === nums[end + 1]) end--
      } else if (sum > 0) {
        end--
      } else {
        start++
      }
    }
  }

  return result
};
