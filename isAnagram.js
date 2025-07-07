const isAnagram=function (s,t){
    if(s.length!==t.length) return false;

    let count={};
    for(let val1 of s){
        count[val1]=(count[val1]|| 0)+1;
    }
     for(let val2 of t){
       if(!count[val2]) return false
       count[val2]--
    }
    return true
};
console.log(isAnagram("anagram", "nagaram"));   // true
console.log(isAnagram("rat", "car"));           // false