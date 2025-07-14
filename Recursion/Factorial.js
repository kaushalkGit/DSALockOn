//Normal Approach
/*let fact=1;
function facto(num){
    for(let i=num;i>0;i--){
        fact*=i
    }
    return fact
}
console.log(facto(5))
*/

//Use of Recursion
function fact(num){
    if(num===0){
      return 1
    }
    else return num * fact(num - 1);
}

console.log(fact(5)); 
