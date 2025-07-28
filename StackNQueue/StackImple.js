/*
>Push
>Pop
>Peek
>isEmpty
>size
*/
function StackQ() {
    let stack = [];

    function push(val) {
        stack.push(val);  // Push single element
    }

    function pop() {
        if (isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        return stack.pop();  // Remove top element
    }

    function peek() {
        if (isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        console.log(stack[stack.length - 1]); // Show top element
    }

    function isEmpty() {
        return stack.length === 0;
    }

    function size() {
        console.log(stack.length);
    }

    return { push, pop, peek, isEmpty, size };
}

// Usage:
let s = StackQ();
s.push(10);
s.push(20);
s.peek();    // Output: 20
s.size();    // Output: 2
s.pop();
s.peek();    // Output: 10
console.log(s.isEmpty()); // false
