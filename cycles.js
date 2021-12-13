// Вывести числа: 4 7 10 13
let out = document.getElementById('out')
let result = '';

for (let i = 4; i <= 13; i = i + 3) {
    result = result + i + ' ';
}
console.log(result)


// Вывести числаа 653 653 552 до 0
for (let i = 653; i >= 0; i = i - 1) {
    result = result + i + ' ';
}
console.log(result)

// Вывести годы с 1983 по 2017
for (let i = 1983; i <= 2017; i = i + 1) {
    result = result + i + ' ';
}
console.log(result)

// Вывести числа -4 -2 0 2 4 8
for (let i = -4; i <= 8; i += 2) {
    result = result + i + ' '
}
console.log(result)

// Таблица умножения на 3
for (let i = 1; i < 9; i++) {
    out.innerHTML += '3*' + i + '=' + (i * 3) + '< br ></br>'
}


// ****
// ****
// ****
let i = 0;
let string = '';

while (i < 4) {
    let k = 0;
    while (k < 4) {
        string += '*';
        k++;
    }
    string += '<br>';
    i++
}

out.innerHTML = string


