let arr=[1,2,3,4,5,6]
let brr=[7,31,10]

//Spread operator helps in joining two array in a new one
let newArr=[...arr,...brr]
console.log(newArr)

//Rest is used in the function but is same as Spread Operator
let restDo=(...number)=>{
return number
}
 console.log(restDo(arr,brr),"Rest",5,6)
