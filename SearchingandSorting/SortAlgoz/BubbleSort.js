//Recursive Approach
/*function BubbleSort(arr,a=0,b=1){
    if (arr[a] > arr[b]) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
  if (b < arr.length - 1) {
        // Continue inner loop
        return BubbleSort(arr, a, b + 1);
    } else {
        // Move to next outer loop pass
        return BubbleSort(arr, a + 1, a + 2);
    }
}*/

//Normal Approach
function BinarySort(arr){
    let s=arr.length;
    for(let i=0;i<s;i++){
        for(let j=0;j<s-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
