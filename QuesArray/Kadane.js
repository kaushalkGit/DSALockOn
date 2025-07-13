function Kadane(arr){
    let sum=0;
    let max=arr[0];

    for (let i = 0; i < arr.length; i++) {
       sum+=arr[i]
       if(sum>max){
            max=sum
       }
       if(sum<0){
        sum=0
       }
    }
    return max
}

console.log(Kadane([5,4,-1,7,8]))