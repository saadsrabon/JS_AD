//Here I will practice memoization
// and recursion
// I will create a function that calculates the nth Fibonacci number
// using memoization
// I will create a cache object to store the results of previous calculations
// I will create a function that takes a number as an argument
// and returns the nth Fibonacci number

 const fibonacci = (n) => {
    
    if (n <= 1) {
        return n;
    }
    console.log('Calculating fibonacci of', n);
    return fibonacci(n - 1) + fibonacci(n - 2);
    
  

 }
 //recursion

 const memoizedFibonacci = (n, cache = {}) => {


    if (n in cache) {
        return cache[n];
    }
    
    cache[n] =fibonacci(n);
    return cache[n];
 }

 console.log(memoizedFibonacci(10)); // 55