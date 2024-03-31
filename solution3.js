function findprimes(start,end){ //it returns an array of prime numbers between the start and the end
    let primes =[];
    for (let i= start; i < end; i++) { //i used the for loop to iterate between the start and the end
        if (isprime(i)){// for each number (i) called the  (isprime) function that is below there passing the (i) as argument
            primes.push(i);// if its true its adds the  number into new prime array
        }
    }
        return primes;
    }


function isprime(num){ // this two functions are dependent on each other
    if (num<=1) return false; // if the number is great or equal to one to return false since 1 is not a prime number
    for (let i = 2; i<=Math.sqrt(num); i++) { //used the for loop  to iterate all numbers from 2 to the square root of input number
        if (num%i ===0){ //check  if input number is divisible by current loop variable
            return false; //if its okay return false
        }
        }
        return true; // if for loop complete returns true indicating that input is a prime number
}
 const result=findprimes(2,10)

console.log(result)
//results its prints out all the prime numbers that are between the range of the find primes