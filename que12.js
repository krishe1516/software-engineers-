function main(){
let laptop = "laptop";
let desktop = "desktop";

// a= purches amount
 
 let purchase_Amount = prompt(" Enter The Price of Laptop or Desktop PC : ", " ");

 if (a<25000)
 switch(desktop){
    case 1: laptop;
    if(a<=25000){
        let discount=(0.0/100)*a
        document.write(`discount${discount}`);
        let laptop =(a - discount);
        document.write("product_price" +laptop);
    }
    else if(a<=57000 && a>=25000){
    let discount=(5/100)*a;
    document.write(`discount${discount}`);
    let   laptop =(a - discount);
    
    document.write(`product_price${laptop}`);
}
    else if(a<=100000 && a>=57000){
    let discount=(7.5/100)*a;
    document.write(`discount${discount}`);
    let   laptop=(a - discount);
    document.write(`product_price ${laptop}`);    
}
    else if(a<100000){
    let discount=(10/100)*a;
    document.write(`discount${discount}`);
    let laptop=(a - discount);
    document.write(`product_price${laptop}`);
}
    else{
     let laptop=(a - discount);
     document.write(`product_price${laptop}`);
    }
    

     
    break;
    
    }

    switch(deskstop){
    case 2: deskstop;
    if(d){
        let discount=(5/100)*a;
        document.write(`discount${discount}`);
        let deskstop=(a - discount);
        document.write(`product_price${deskstop}`);
    }
    else if(a<=57000 && a>=25000){
 
        let discount=(7.5/100)*a;
        document.write(`discount${discount}`);
        let deskstop=(a - discount);
        document.write(`product_price${deskstop}`);
    }
 else if(a<=100000 && a>=57000){
    let discount=(10/100)*a;
    document.write(`discount${discount}`);
    let deskstop=(a- discount);
    document.write(`product_price${deskstop}`);
}
    else if(a<100000){
    let discount=(15/100)*a;
    document.write(`discount${discount}`);
    let  deskstop=(a- discount);
    document.write(`product_price${deskstop}`);
    }
    else
    {
      let  product_price=(a- discount);
      document.write(`product_price${deskstop}`);
    }
    default:
    
    

}
   
}
main();
document.write("thank you for purchess");
    

 
