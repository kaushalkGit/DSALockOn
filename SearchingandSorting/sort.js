/*let arr=[4,3,7,1,10]
function compare(a,b){
    return a-b
}
console.log(arr.sort(compare))
*/
//what if there is an array of objects
let pep=[{name:"Kaushal",id:43},
        {name:"Sapna",id:34},
        {name:"Aayush",id:12},
        {name:"Nitin",id:56}
]
function compareo(a,b){
    return a.id-b.id
}
console.log(pep.sort(compareo))
