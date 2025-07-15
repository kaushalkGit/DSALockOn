function isPalindrome(s,l=0,r=null){
     if (s < 0) return false; 
    s=s.toString()
     if (r === null) r = s.length - 1;
    //base Condition
    if(l>=r) return true;

    //is Mismatch Found
    if(s[l]!==s[r]) return false

    //recursive function called
    return isPalindrome(s,l+1,r-1)
}

console.log(isPalindrome(12151))