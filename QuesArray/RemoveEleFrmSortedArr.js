
var removeDuplicates = function(nums) {
    let removed=[...new Set(nums)]
    nums.length=0
    nums.push(...removed)
    return removed.length

};