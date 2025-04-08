let isNumberPrime = n => {
    let isPrime = true;
    for(let i = 2; i < n; i++) {
        let remainder = n % i;
        if (remainder == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime == true) {
        console.log(`${n} is a prime number`);
    }
    else {
        console.log(`${n} is not a prime number`);
    }
    
}

isNumberPrime(8);
isNumberPrime(11);
isNumberPrime(7);
isNumberPrime(12);