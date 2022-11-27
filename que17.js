function add_odd_three_digit_number(){
    let sum= 0;
    for (let i=100; i<=995; i+=5){
        sum += i;
    }
    console.log(" sum of all 3-digit even natural numbers :  " + sum);
}
add_odd_three_digit_number();