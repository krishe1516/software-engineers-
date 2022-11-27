function find_prime_number(n){




    if ( n < 1){
    
        console.log(`${n} is Not a Prime Number or Composite Number`);
    
    }
    
    else if (n == 2) {
    
        console.log(`${n} is a Prime Number `);
    
    }
    
    else {
    
    
    
    
        let isPrime = Boolean(true);
    
        for (let i = 2; i <= n - 1; i++) {
    
            if (n % i == 0) {             // n is a multiple of i( i not equal to 1 or n)
    
                isPrime = Boolean(false);
    
            }
    
        }
    
    
    
    
        if (isPrime == true) {
    
            console.log(`${n} is a Prime Number `);
    
        }
    
        else {
    
            console.log(`${n} is Not a Prime Number `);
    
        }
    
    }
    
    
    
    
    }
    
    
    
    
    find_prime_number(1);
    
    find_prime_number(2);
    
    find_prime_number(3);
    
    find_prime_number(4);
    
    find_prime_number(5);
    
    find_prime_number(6);
    
    find_prime_number(7);
    
    find_prime_number(8);
    
    find_prime_number(9);
    
    find_prime_number(10);
    
    find_prime_number(11);
    
    find_prime_number(-12);
    
    
    