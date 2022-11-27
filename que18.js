function find_Factorial(){
    let f = 1;
    let n =5;

    for(let i=1; i<=n; i++){
        f=f*i;
    }
    console.log(`Factorial of ${n}`, + f)
}
find_Factorial();
