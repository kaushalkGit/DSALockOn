class Solution {
    arraySum(arr) {
    /*  let sum=0
        for(let i=0;i<arr.length;i++){
         
            sum+=arr[i]
        }
        return sum
        
       */ 
 if (arr.length === 0) return 0; 
        return arr[arr.length - 1] + this.arraySum(arr.slice(0, -1));
   
    }
}