function isNumberPrime(n){
    let isprime = true ;
    for( let i=2;i<n;i++ ){
        let remainder = n % i ;
        if (remainder==0){
            isprime = false ;
            break;
        }
    }

    if(isprime == true){
        console.log(`${n} is a prime number`);
        
    }else{
        console.log(`${n} is not a prime number`);

    }
}

isNumberPrime(8);
isNumberPrime(11);
isNumberPrime(13);
isNumberPrime(6);