// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
// console.log (num)
// console.log (float)
// console.log (pow)

// console.log ('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log ('Math.pow 53', Math.pow(x=2, y=53)-1)
// console.log ('Number.POSITIVE_INFINITYNTEGER', Number.POSITIVE_INFINITYNTEGER)
// console.log ('MAX_ value', Number.MAX_VALUE)
// console.log ('MIN_ value', Number.MIN_VALUE)
// console.log ('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log ('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log ('2/0', 2/0)
// console.log (Number.NaN) // Not A Number
// console.log (typeof NaN)  
// console.log (2/ undefined)  
// const weird = 2/ undefined
// console.log (isNaN (weird))
// console.log (Number.isNaN (42))
// console.log (Number.isFinite (Infinity)) // конечна ли бесконечность
// console.log (Number.isFinite (42))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log (Number.parseInt(stringInt) + 2) // переделываем в число строку, чаще всего
// console.log (Number(stringInt) + 2) // переделываем в число строку
// console.log (+stringInt + 2) // переделываем в число строку


// console.log (parseFloat (stringFloat) + 2) 
// // как в предыдущем примере

// console.log (0.4+0.2) //0.6
// console.log ((4/10)+(2/10)) //0.6
// console.log ((0.4+0.2).toFixed (1)) // в тупую вырезает и это строка
// console.log (parseFloat((0.4+0.2).toFixed (1))) // число


//  2  BigInt
// console.log (900719925474099199999999n-90071992547409919999999n) // число
// console.log (-900719925474099199999999n) // число
// // console.log (-900719925474099199999999.3232n) // error

// // console.log (10n-4) // error
// console.log (parseInt(10n)-4) // 
// console.log (10n- BigInt (4)) // 
// console.log (5n / 2n) // 

// 3 Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25)) // корень
console.log(Math.pow(5, 3)) // степень
console.log(Math.abs(-42)) // модуль
console.log(Math.max(-42, 42, 12, 400)) // max
console.log(Math.min(-42, 42, 12, 400)) // min
console.log(Math.floor(4.9)) // округление в меньшую всегда
console.log(Math.ceil(4.9)) // округление в большую всегда
console.log(Math.round(4.9)) // округление правильное
console.log(Math.trunc(4.9)) // 
console.log(Math.sin(4.9)) // 
console.log(Math.random()) // 

// 4 Example
// Создать функцию которая будет возвращать число в диапазоне 2х чисел (т.к. рэндом только между 0 и 1)

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))

