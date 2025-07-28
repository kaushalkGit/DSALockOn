function QuickS(arr){
    let left=[];
    let right=[];
    let pivot=arr[0]

    if(arr.length<=1){ return arr}

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else   right.push(arr[i])
    }
    return [...QuickS(left),pivot,...QuickS(right)] 
}
console.log(QuickS([1,4,2,7,8,4,8,2,3]))