function SecondLargest(arr){
  let sorti=[...new Set(arr)].sort((a,b)=>b-a)//(...)Wraps those spread elements back into a new array.
  return sorti[1]!=undefined?sorti[1]:-1;
}
console.log(SecondLargest([2,2,1,5,6,3]))