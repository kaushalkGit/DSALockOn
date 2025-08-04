var CircQueue = function (k) {
    this.queue = [];
    this.size = k;
}

CircQueue.prototype.enqueue = function (value) {
    if (this.queue.length === this.size) return false; // Fix
    this.queue.push(value);
    return true;
}

CircQueue.prototype.dequeue = function () {
    if (this.queue.length === 0) return false;
    this.queue.shift();
    return true;
}

CircQueue.prototype.front = function () {
    return this.queue[0] ?? null; // Return null if empty
}

CircQueue.prototype.rear = function () {
    return this.queue[this.queue.length - 1] ?? null;
}

CircQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
}

CircQueue.prototype.isFull = function () {
    return this.queue.length === this.size;
}

CircQueue.prototype.currentSize = function () { // renamed to avoid conflict
    return this.queue.length;
}

let cq = new CircQueue(3);

cq.enqueue(10);   // true
cq.enqueue(20);   // true
cq.enqueue(30);   // true
cq.enqueue(40);   // false (queue is full)

console.log(cq.front());  // 10
console.log(cq.rear());   // 30

cq.dequeue();             // true (removes 10)

cq.enqueue(40);           // true (queue = [20, 30, 40])

console.log(cq.front());  // 20
console.log(cq.rear());   // 40
