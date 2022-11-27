function fun(){
    let a= 3;
    function fun2(){
        let b=30
        function fun3(){
            let c=a+b;
            console.log(c)
        }fun3()
    }fun2()

}fun()