class Solution {
    findSum(n) {
    /*  let sum=0;
     
      for(let i=0;i<=n;i++){
           if (n<=0) {return n}
          sum+=i
      }
      return sum;
        */
         if(n<=0) return 0
    return n+this.findSum(n-1)
    }
}
