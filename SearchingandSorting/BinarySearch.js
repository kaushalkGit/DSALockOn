function Binary(nums,tar){
    let left=0
    let right=nums.length-1
    while(left<=right){
    let middle=Math.floor((left+right)/2)

    if(nums[middle]===tar){
        return middle;
    }
    if(nums[middle]<tar){
        left=middle+1
    }
    else
       {right=middle-1} 
    }
    return -1

}

console.log(Binary([-1,0,3,5,9,12],9))