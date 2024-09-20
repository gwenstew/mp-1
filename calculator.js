//javascript functionality for calculator.html

//let firstnum = document.getElementById("first-num").value;
//let secondnum = document.getElementById("second-num").value;

function addition() {
    //adds the two inputs
    let firstnum = document.getElementById("first-num").value;
    let secondnum = document.getElementById("second-num").value;
    let result = Number(firstnum) + Number(secondnum);

    checkNegative(result);
    //document.getElementById("output").innerHTML= result;
}

function subtraction() {
    //subtracts the two inputs
    let firstnum = document.getElementById("first-num").value;
    let secondnum = document.getElementById("second-num").value;
    let result = Number(firstnum) - Number(secondnum);

    checkNegative(result);
    //document.getElementById("output").innerHTML= result;
}

function divide() {
    //divides the two inputs
    let firstnum = document.getElementById("first-num").value;
    let secondnum = document.getElementById("second-num").value;
    let result = Number(firstnum) / Number(secondnum);

    checkNegative(result);
    //document.getElementById("output").innerHTML= result;
}

function multiply() {
    //multiplies the two inputs
    let firstnum = document.getElementById("first-num").value;
    let secondnum = document.getElementById("second-num").value;
    let result = Number(firstnum) * Number(secondnum);

    checkNegative(result);
    //document.getElementById("output").innerHTML= result;
}

function power() {
    //raises first input to power of second input
    let firstnum = Number(document.getElementById("first-num").value);
    let secondnum = Number(document.getElementById("second-num").value);
    let result = 1;

    for (let i = 0; i < secondnum; i++) {
        result *= firstnum;
    }
    checkNegative(result)
}

function clearC() {
    //clears both inputs
    document.getElementById("first-num").value = '';
    document.getElementById("second-num").value = '';
    document.getElementById("output").innerHTML = '';
}

function checkNegative(num) {
    //checks if number is negative and changes output to red
    let output = document.getElementById("output");
    if (num < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = 'black';
    }

    output.innerHTML = num;
}
