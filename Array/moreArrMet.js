let nums=[1,2,3,4]
let nums2=[5,6,7,8]
/* concat merge two set of data into one without making changes in them
let newm=nums.concat(nums2)
console.log(newm)
*/

const newm=nums.slice(0,3)
console.log(newm) //will include the first of index but not include last of the index value
