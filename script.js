let doSum = (firstNumb, secondNumb) => firstNumb + secondNumb;
let doSubtraction = (firstNumb, secondNumb) => firstNumb - secondNumb;
let doMultiplication = (firstNumb, secondNumb) => firstNumb * secondNumb;
let doDivision = (firstNumb, secondNumb) => firstNumb / secondNumb;

function matFunc() {
    let firstNumb = prompt('Введите первое число');
    let operator = prompt('введите оператор')
    let secondNumb = prompt('Введите второе число');


    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        if (!isNaN(+firstNumb) && firstNumb!== null && !isNaN(+secondNumb) && secondNumb!== null ) {
            firstNumb = Number(firstNumb); secondNumb = Number(secondNumb);
            if(operator === '+') {
                alert(`Ваш ответ: ${doSum(firstNumb, secondNumb)}`);
            }
            if(operator === '-') {
                alert(`Ваш ответ: ${doSubtraction(firstNumb, secondNumb)}`);
            }
            if(operator === '*') {
                alert(`Ваш ответ: ${doMultiplication(firstNumb, secondNumb)}`);
            }
            if(operator === '/') {
                alert(`Ваш ответ: ${doDivision(firstNumb, secondNumb)}`);
            }
            matFunc();
        }
        else { alert("Вы ввели неверные числа (число)")
            matFunc();
        };
    }
    else{ alert("Вы ввели неверный оператор")
        matFunc();
    }

};

matFunc();