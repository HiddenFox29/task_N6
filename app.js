let pswd      = "qwert";
// let numberWin = 29;

// вход через пароль
let i = 0;
while (i < 3){
    let answer = prompt('Введите пароль');
    if (answer === pswd) {
        document.write('wellcom')
        break;
    }
    i++
    alert('осталось ' + (3-i))
    if (i === 3){
        document.write('ooop')
    }

}

