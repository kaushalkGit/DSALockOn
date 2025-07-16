function rev(str, l = 0, r = undefined) {
    // Convert string to array only once
    if (typeof str === "string") str = str.split("");
    if (r === undefined) r = str.length - 1;

    // Base case
    if (l >= r) return str.join("");

    // Swap
    [str[l], str[r]] = [str[r], str[l]];

    // Recursive call on the modified array
    return rev(str, l + 1, r - 1);
}

console.log(rev("hello")); 
