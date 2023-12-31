// Q2 Fibonacci Number
// Fibonacci Series -> 0 1 1 2 3 5 8 13 21 34 55 89 ....


// Input n=3 --->>>>>>> Output:2
// Input n=9 --->>>>>>> Output:34


// Simple Method
const SimpleFibonacci =(n)=>{
    const arr=[0,1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1]+arr[i-2]) 
    }
    return arr[n]
}
// console.log(SimpleFibonacci(5))

// Recursion Method
const Fibonacci=(n)=>{
    if(n<2) return n;
    return Fibonacci(n-1) + Fibonacci(n-2)
}
console.log(Fibonacci(9))


// Exapmle n=5
// Fibonacci(5-1)+Fibonacci(5-2)--->Fibonacci(4)+Fibonacci(3)---->(5)
//Fibonacci(4)--->Fibonacci(4-1)+Fibonacci(4-2)--->Fibonacci(3)+Fibonacci(2)------>(3)
// Fibonacci(3)--->Fibonacci(3-1)+Fibonacci(3-2)--->Fibonacci(2)+Fibonacci(1)----->(2)
// Fibonacci(2)--->Fibonacci(2-1)+Fibonacci(2-2)--->Fibonacci(1)+Fibonacci(0)----->>>(1)


// Above Solution in one Line
const FibonacciOneLine=(n)=> (n<2) ? n : FibonacciOneLine(n-1) + FibonacciOneLine(n-2);