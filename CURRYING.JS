function fun(item){
    return function(inner){
        return item[inner]
    }
}
    let mobile={
        name : "iphone",
        price: 62000,
        ram : "6 gb" 
    }
    let car={
        name : "Thar",
        price: "16 lakhs",
        color : "Black"
    }
let Out=fun(car)('price')
console.log(Out)
/* WE can Seperate Argument List In Individual Function And call it together CAlled As Currying */