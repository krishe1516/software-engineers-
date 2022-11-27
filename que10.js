function sachinwanere() {
    let marks = document.getElementById('num').value;
    if (marks > 90) {
        document.write("You Are Passed And Your Grade is A ")
    }
    else if (marks > 80 && marks <= 90) {
        document.write("You Are Passed And Your Grade is B ")
    }
    else if (marks > 70 && marks <= 80) {
        document.write("You Are Passed And Your Grade is C ")
    }
    else if (marks > 60 && marks <= 70) {
        document.write("You Are Passed And Your Grade is D ")
    }
    else if (marks > 02 && marks <= 40) {
        document.write("You Are Failed And Your Grade is E ")
    }
}
sachinwanere()