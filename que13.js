let age = prompt("Enter Your Age :");
let gender = prompt("enter your gender:");

if (age >= 65 || gender == "female" ) {
    console.log( "Wronge Catagory");
}
else{

    let taxable_amount = prompt(`Enter the amount of your salary : `)

    if (taxable_amount <= 160000) {
        document.write(" No need to Pay The Income Tax : ", taxable_amount);
    }
    else if (taxable_amount < 500000 && taxable_amount >= 160000) {
       let income_tax = ((taxable_amount) * 10/100 );
       document.write("Please Pay The Income tax : " , income_tax)
    }
    else if (taxable_amount < 800000 && taxable_amount >= 500000) {
        let income_tax = ((taxable_amount) * 20/100) + 34000 ;
        document.write("Please Pay The Income tax : " , income_tax)
    }
    else {
    
        let income_tax = ((taxable_amount) * 30/100 ) + 94000 ;
        document.write("Please Pay The Income tax : " , income_tax)
    }
}