const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopupButton = document.getElementById('closePopup');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// 1
let number1 = 10;
let number2 = -9;
let number3 = 0;
let firstContainer = document.getElementById("first-container");

function checkNumber(number) {
    if (number > 0) {
        return 'Positive';
    } else if (number < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}

firstContainer.innerHTML = "Number " + number1 + " is: " + checkNumber(number1) + "<br>" +
"Number " + number2 + " is: " + checkNumber(number2) + "<br>" +
"Number " + number3 + " is: " + checkNumber(number3);

// 2
let secondContainer = document.getElementById("second-container");

function printMultiplication1() {
    let table = '________________________________________________';
    table += '<br>';

    for (let i = 1; i <= 10; i++) {
        table += '<br>';
        for (let j = 1; j <= 10; j++) {
            table += `${i * j}` + `&nbsp;&nbsp;&nbsp;`;
        }
       }
       table += '<br>';
       table += '________________________________________________';
       table += '<br>';
    return table;
}

function printMultiplication2() {
    let table = '<table border="1" cellspacing="0" cellpadding="5" style="text-align: center;">';
    table += '<tr>';
    table += '<th></th>';
    for (let i = 1; i <= 10; i++) {
        table += `<th>${i}</th>`;
    }
    table = table + '</tr>';

    for (let i = 1; i <= 10; i++) {
        table += '<tr>';
        table += `<th>${i}</th>`;
        for (let j = 1; j <= 10; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += '</tr>';
    }

    table += '</table>';
    return table;
}

secondContainer.innerHTML = printMultiplication1() + "<br>" + printMultiplication2();

// 3
let thirdContainer = document.getElementById("third-container");

function printEvenNumbers() {
    let evenNumber = '';
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            evenNumber += i + " ";
        }
    }
    return evenNumber;
}

thirdContainer.innerHTML = printEvenNumbers();

// 4
let fourthContainer = document.getElementById("fourth-container");

function printDaysName(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day!";
    }
}

fourthContainer.innerHTML = "1rst day is: " + printDaysName(1);

// 5
let fifthContainer = document.getElementById("fifth-container");

function sumNumbers(number) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= number);
    return sum;
}

fifthContainer.innerHTML = "Sum of 100 numbers = " + sumNumbers(100);