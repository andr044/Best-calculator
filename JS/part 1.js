// 1 переменные
// variable - переменная
// 3 способа обозначения переменных
// var name = 'Andr'
// //const lastName = 'Smirnov' //string
// // let age = 26 // number
// const isProgrammer = true // boolean
// const firstName = "Владилен"
// const _ = ''
// // нельзя переменную с цифры и на if


// name = 'Влад'

// // const нельзя менять названия - ошибка, рекомендуют использовать const и let

// // 2 Мутирование
// // console.log('Имя человека: ' + firstName + ', возраст ' + age)
// // console.log(age)
// // console.log(age.toString())
// //alert(('Имя человека: ' + firstName + ', возраст ' + age))
// // API - это апликейшен програм интерфейс

// // const lastName = prompt(message: 'введите фамилию')
// // alert(firstName + '' + lastName) - не получилось, дб быть окошко при загрузке страницы

// // 3 Операторы
// let currentYear = 2020
// const birthYear = 1993
// const age = currentYear + birthYear
// // console.log(age)

// const a = 10
// const b = 5
// let c = 32
// c=c+a
// c +=a
// c -=a
// c *=a
// c /=a
// console.log (a+b)
// console.log (a-b)
// console.log (a*b)
// console.log (a/b)
// console.log (currentYear++)
// console.log (--currentYear)
// console.log (c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x

// console.log (typeof isProgrammer)
// console.log (typeof name)
// console.log (typeof age)
// console.log (typeof x)
// console.log (typeof null)

// 5 Приоритет операторов

// mdn - ДОКУМЕНТАЦИЯ ПО JS!!! - тут нужно посмотреть приоритеты!!!

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
// const isFullAge = currentYear - birthYear >=fullAge
// console.log (isFullAge)

// 6 Условные операторы
// const courseStatus = 'ready' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс готов можно проходить')
// }
// else if (courseStatus === 'pending') {
//     console.log('Курс пока в разработке')
// }

// const isReady = false


// if (isReady) {
//     console.log ('все готово')
    
// } else { console.log ('все не готово')}

// Тернарное выражение
// isReady ? console.log ('все готово') : console.log ('все не готово')

// const num1 = 42 // number
// const num2 = '42'// string
// console.log(num1===num2)

// 7 Булевая логика  - смотрим на сайте  MDN!!!
// Оператор И &
// Оператор ИЛИ ||
// Логическое НЕ !

// 8 Функции
// function calculateAge(year){
// return 2020 - year
// }

// console.log (calculateAge(1993))
// console.log (calculateAge(1999))

// function logInfoAbout (name,year) {
//     const age = calculateAge (year)
//     console.log ('Человек ' + name + ' возраст ' + age)

// }
// logInfoAbout( 'Vladilen', 1993) // этой конструкцией задаем имя и год рождения

// 9 Массивы
// const cars = ['Mazda', 'Mers', 'ford']
//const cars = new Array ('Mazda', 'Mers', 'ford')
// console.log (cars)

// console.log (cars[1])
// console.log (cars[2])
// console.log (cars[0])

// console.log (cars.length)

// cars[0] = 'porshe'
// console.log (cars)
// cars[3] = 'Mazda'
// console.log (cars)

// 10 Циклы

// const cars = ['Mazda', 'Mers', 'ford','porshe']

// // for (let i = 0; i< cars.length; i++) {
// //     const car = cars[i]
// //     console.log (car)   
// // }
// for (let car of cars) {
//     console.log (car)
// }

//  11 Объекты
// Группировка
// const person = {
//     firstName: 'Vladilen',
//     lastName: 'Smirnov',
//     year: 1993,
//     lang: ['Ru','En'],
//     hasWife: false,
//     greet: function() {
//     console.log ('greet from person')
//     }
// }
// console.log(person)
// person.greet()

// const key = 'lang'
// person.isProg = true
// console.log(person)

