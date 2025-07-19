var findKthPositive = function(arr, k) {
    let x = 1;
    let brr = [];
    let i = 0;

    while (brr.length < k) {
        if (i < arr.length && arr[i] === x) {
            i++; // skip this number, as it's in the array
        } else {
            brr.push(x); // this is a missing number
        }
        x++;
    }

    return brr[k - 1]; // k-th missing is at index k-1
};
