function fibo(n){
    let first=0;
    let second=1;
    
for(i=1;i<=n;i++){
    next=first+2*second
    console.log(next);
   
    first=second
    second=next    
}
}
fibo(20)