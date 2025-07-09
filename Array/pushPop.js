let flavour={
    name:"masala",
    origin:"india"
};
let arr=["cream","mushroom","dhaniya","malboro",flavour]//object can be added as a single element in array
//Adding element at the end
arr.push("biryani")

//Removing element from the end
arr.pop()
arr.pop()

//Adding element at the start
arr.unshift("malai")
arr.unshift("maska")

//removing element from the start
arr.shift()

console.log(arr)