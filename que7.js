function main(){
    let p,r,t,si;
    // prompt("Enter the principal rate and time:");
    p=prompt("enter the principal amount");
    r=prompt("enter thr interest rate:");
    t=prompt("enter the time:");
    si=(p*r*t)/100;
    document.write("simple interest="+si);
} 
main()