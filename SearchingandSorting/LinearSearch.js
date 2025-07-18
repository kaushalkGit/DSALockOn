function Linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target===arr[i])
            return i
    }
}

console.log(Linear([1,2,3,4,5],4))

//TC=O(n)
//SC=O{n}