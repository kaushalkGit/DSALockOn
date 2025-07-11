let nums=[1,2,3,4]
let nums2=[5,6,7,8]
let dummy=[1,2,3,4,6]
let nest=[1,[2,3],[[4,6,7],8]]
/* 
Concat
concat merge two set of data into one without making changes in them
let newm=nums.concat(nums2)
console.log(newm)
*/


/*
Slice
will include the first of index but not include last of the index value
const newm=nums.slice(0,3)
console.log(newm) 
*/

/*
Splice
does update the existing array value and replace the range which is given in the code
nums.splice(1,3,"pineapple")
console.log(nums)
*/

/*
Fill 
Fills up with the given value in the code from the given range
nums.fill(0,2)
console.log(nums)
*/
/*
findIndex
let newD=dummy.findIndex((item)=>item===4)
console.log(newD)
*/

/*
Flat
let flatEnd=nest.flat(2)
console.log(flatEnd)
*/