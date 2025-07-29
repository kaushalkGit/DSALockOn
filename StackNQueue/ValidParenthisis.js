function isValid(arr){
  let str=[]
  let map={
    "}":"{",
    "]":"[",
    ")":"("
  };
  for (let i = 0; i < arr.length; i++) {
   let s=arr[i]

   if(s==="{"||s==="["||s==="("){
    str.push(s)
   }
   else if(s==="}"||s==="]"||s===")"){
        if(str.pop()!==map[s]){
            return false;
        }
   }

    
  }
   return str.length === 0;
}
console.log(isValid(["(", "{", "}", ")"]))