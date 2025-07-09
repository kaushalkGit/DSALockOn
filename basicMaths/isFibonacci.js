
/*var fib = function(n) {
  let arr=[0,1];
    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];
};
console.log(fib(6))
*/
//optimized code down below
var fib = function(n) {
  if(n<=1) return n;
  return fib(n-2)+fib(n-1);
};
console.log(fib(7))