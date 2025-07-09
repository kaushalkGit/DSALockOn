const isPalindrome= function(x){
    return x===+x.toString().split("").reverse().join("");
}
const pal=isPalindrome(121);
console.log(pal)