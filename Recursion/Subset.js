function Subset(nums){
    let result=[]
    let temp=[];

    function recursiveSub(nums,i){
        if(i===nums.length){
            return result.push([...temp])
        }
        temp.push(nums[i])
        recursiveSub(nums,i+1)
        temp.pop();
        recursiveSub(nums,i+1)
    }
    recursiveSub(nums,0)
    return result
}

console.log(Subset([1,2,3]))