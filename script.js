
let tot = 0;
const button = document.getElementById('bt');
const totale = document.getElementById('totale');

// button.addEventListener('click', function(){
//     const number1 = parseInt(document.getElementById('n1').value);
//     const number2 = parseInt(document.getElementById('n2').value);
//     const operator = document.getElementById('op').value;

//     if(isNaN(number1) || isNaN(number2))return;

//     switch (operator){
//         case '+' :
//             tot = number1 + number2;
//             break;
//         case '-' :
//             tot = number1 - number2;
//             break;
//         case '*' :
//             tot = number1 * number2;
//             break;
//         case '/' :
//             tot = number1 / number2;
//             break;
//     }

//     console.log(tot);

//     totale.innerHTML = `Totale = ${tot}`;
// });

const ops = ['+', '-', '*', '/'];

button.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('n1').value);
    const number2 = parseFloat(document.getElementById('n2').value);
    const operator = document.getElementById('op').value;

    if((isNaN(number1) || isNaN(number2)) || !ops.includes(operator))return;

    totale.innerHTML = `Totale = ${do_math(number1, number2, operator)}`;
});

function do_math(number1, number2, operator){
    return eval(number1 + operator + number2);
}