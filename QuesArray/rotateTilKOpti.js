function reverse(nums,l,r){
    while(l<r){
        let temp=nums[l]
        nums[l]=nums[r]
        nums[r]=temp
        l++;
        r--;
    }
}
function rotate(nums,k){
    k=k%nums.length
    reverse(nums,0,nums.length-1)
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
    return nums
}

console.log(rotate([7,5,2,6,3,4,9,1,8],3))