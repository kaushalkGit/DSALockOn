function QueueImple(arr=[]){
    //Enqueue
    function enqueue(vari){
           arr.push(vari)
    }
    //Dequeue
    function dequeue(){
        arr.shift()
    }
    //Front
     function front(){
       return arr[0]
    }
    //isEmpty
     function isEmpty(){
       return arr.length===0
    }
    //Size
     function size(){
       return arr.length
    }
      // Print Queue
    function print() {
        console.log(arr.join(" <- ")); // Show queue visually
    }

     return { enqueue, dequeue, front, isEmpty, size , print };
}

const q = QueueImple();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.print()
q.dequeue();
q.print()
console.log(q.front());
console.log(q.size());