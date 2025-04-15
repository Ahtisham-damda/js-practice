//Rewrite fibonacci numbers program by using arrays. Push each element to the array and print it at the end.                       
                       //Using Arrow Function
                       let fibNos = [];
                       let n = 10; // 0 1 1 2 3 5 8 13 21 ...
                       
                       for(let i = 0; i<=n; i++) {
                           if (i == 0 || i == 1) {
                               fibNos.push(i);
                           }
                           else {
                               fibNos.push(fibNos[i-1] + fibNos[i-2]);
                           }
                       }
                       console.log(`Fibonacci Nos => ${fibNos}` );


                        //Without Using Arrow Function
// function fibonacciArray(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) fib[fib.length] = fib[i - 1] + fib[i - 2];
//     return fib;
//   }
  
//   console.log(fibonacciArray(10));





