let flavour={
    name:"masala",
    origin:"india"
};
let arr=["cream","mushroom","dhaniya","malboro",flavour]//object can be added as a single element in array
//Adding element at the end
arr.push("biryani") //Push

//Removing element from the end
arr.pop()
arr.pop() //POP

//Adding element at the start
arr.unshift("malai")
arr.unshift("maska") //Unshift

//removing element from the start
arr.shift()  //Shift

console.log(arr)