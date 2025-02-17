function checkAge() {
    let age = document.getElementById('age').value;
    if (age >= 65) {
        document.getElementById('ageResult').innerText = 'You have reached retirement age';
    } else {
        document.getElementById('ageResult').innerText = 'It is too early to retire';
    }
}

function compareNumbers() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num1 > num2) {
        document.getElementById('compareResult').innerText = 'The first number is bigger';
    } else if (num2 > num1) {
        document.getElementById('compareResult').innerText = 'The second number is bigger';
    } else {
        document.getElementById('compareResult').innerText = 'The numbers are equal';
    }
}

function checkEvenOdd() {
    let number = document.getElementById('number').value;
    if (number % 2 == 0) {
        document.getElementById('evenOddResult').innerText = 'The number is even';
    } else {
        document.getElementById('evenOddResult').innerText = 'The number is odd';
    }
}
