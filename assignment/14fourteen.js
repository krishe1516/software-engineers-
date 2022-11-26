function Factorial() {
    let f = 1;
    let n = prompt("Enter the Integer number :");

    for (let i = 1; i <= 5; i++) {
        f = f * i;
    }
    document.write(`Factorial:`, + f)
}
Factorial();