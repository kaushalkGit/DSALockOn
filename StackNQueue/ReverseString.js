function revStr(s){
    let arr=[]
    let brr=[]
    let words;

    words=s.split(" ")
    for (let i = 0; i < words.length; i++) {
       arr.push(words[i])        
    }
    for (let i = 0; i < words.length; i++) {
       brr.push(arr.pop())
    }
    return brr.join(" ")
}
console.log(revStr("The sky is blue"));