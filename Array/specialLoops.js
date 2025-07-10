let arr=[1,2,3,4,5]
/*let newArr=arr.map((item,index,array)=>{
   return item+5
})
console.log(newArr)
*/
/*let newArr=arr.filter((item,index,array)=>{
   return item>2
})
console.log(newArr)
*/
/*let sum=arr.reduce((prev,cur)=>{
   return prev+cur
},5)
console.log(sum)
*/
/*let newArr=arr.some((item,index,array)=>{
   return item>3
})
console.log(newArr)
*/
/*let newArr=arr.every((item,index,array)=>{
   return item<0
})
console.log(newArr)
*/
let newArr=arr.find((item,index,array)=>{
   return item>2
})
console.log(newArr)