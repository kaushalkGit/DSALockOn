/*function RangeOfNum(strt, end) {
    let arr = [];
    for (let i = strt; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(RangeOfNum(0, 5));
*/

function RangeOfNum(strt, end){
    if(strt>end){
        return []
    }
    else{
        return [strt].concat(RangeOfNum(strt+1,end))
    }
}
console.log(RangeOfNum(0,5))