const buyNSell=function(arr){
    let maxprof=0;
    for(let i=0;i<arr.length;i++){
         for(let j=i+1;j<arr.length;j++){
            let profit=arr[j]-arr[i];
            if(profit>maxprof)
               maxprof=profit;
         }
    }
    return maxprof;
}
//7,1,3,4,2,6
console.log(buyNSell([7,1,3,4,2,6]));