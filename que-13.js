let income=prompt("Enter Income")
let age=prompt("Enter Age")
let gender=prompt("Enter Gender")
if(age>=65 || gender=="female" || gender=="Female"){
   document.write("Wrong Catageory")
}
else if(age<=65 && gender=="male" || gender=="Male"){
    if(income<=160000){
    document.write("No Tax Applied")
}
else if(income>160000 && income<=500000) {
    let amt=income-160000
    let discount=(10/100)*amt
    tax=discount
    document.write(tax)
}
else if(income>500000 && income<=800000) {
    let amt=income-500000
    let discount=(20/100)*amt
    tax=discount+34000
    document.write(tax)
}
else {
    let amt=income-800000
    let discount=(30/100)*amt
    tax=discount+94000
    document.write(tax)
}
}

