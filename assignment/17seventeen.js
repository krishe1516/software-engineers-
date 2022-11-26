function add_three_digit_odd_num()

{
let sum=0;

for(let i=101; i<=999;i+=2)
{
if(i%5==0);
sum+=i;
}
document.write("sum of all three digit odd natural number: ", +sum);

}
add_three_digit_odd_num();

