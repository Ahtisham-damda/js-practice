function isNumberPrime(n){
    let isprime = true ;
    for(i=2;i<n;i++ ){
        let remainder = n % i;
        if(remainder == 0){
            isprime = false ;
            break;
    }
}
    return isprime ;
}

let n = 11
;
let prime = isNumberPrime(n);

if(prime == true){
    console.log(`${n} is a prime number`);
}
else{
    console.log(`${n} is not prime number`);


}