function prime(n){
    for(i=2;i<=n;i++){
        if(n%i==0){
            return "Not A Prime Number"
        }
        else{
            return "Prime Number"
        }
    }
    }
    let result=prime(5)
    console.log(result)