function maxSubArray(arr){
    let maxValue=arr[0]
    let strtIndex=0
    let endindex=0
 for(let i=0;i<arr.length;i++){
    let currentSum=0;
    for(let j=i;j<arr.length;j++){
        currentSum=currentSum+arr[j]
        if(currentSum>maxValue){
            maxValue=currentSum
            strtIndex=i
            endindex=j
        }
    }
 }
 return {
    sum:maxValue,
    subArray:arr.splice(strtIndex,endindex+1)
 }
}

console.log(maxSubArray([5,4,-1,7,8]))