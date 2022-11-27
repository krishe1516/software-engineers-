function add_even_three_digit_number(){
    let sum= 0;
    for (let i=100; i<=998; i+=2){
        sum += i;
    }
    console.log(" sum of all 3-digit even natural numbers :  " + sum);
}
add_even_three_digit_number();