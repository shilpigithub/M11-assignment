//STEP 1

// let dt = prompt('Enter date to know number of days in month ex 02/02/2023 : ')
// let date = new Date(dt)
// let month = date.getMonth()
// let yr = date.getFullYear()
// console.log('month: ' + month + 'year: ' + yr)
// console.log('number of days in month: ' + daysInMonth(month+1,yr) )

// function daysInMonth (month, year) {
//     return new Date(year, month, 0).getDate();
// }

//STEP 2

// const monthNames = ["January", 
// "February", 
// "March",
//  "April", 
//  "May",
//   "June",
//    "July", 
//    "August", 
//    "September",
//     "October",
//      "November",
//       "December"
// ];
// let dt = prompt('Enter date to know its month: ')
// let date = new Date(dt)
// console.log('The month entered is: ' + monthNames[date.getMonth()])


//STEP 3

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let dt = prompt('Enter date to know its on a weekend: ')
// let date = new Date(dt)

// console.log('The day is : ' + days[date.getDay()])
// if(date.getDay() === 0 || date.getDay() === 6) {
//     console.log('It is a weekend')
// }else {
//     console.log('NOT A WEEKEND!')
// }

//STEP 4

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let dt = prompt('Enter date to know what day was yesterday: ')

// let date = new Date(dt)
// today = days[date.getDay()]


// console.log('Today is : ' + today)
// if(date.getDay() - 1 === -1)
//     console.log('Yesterday was: ' + days[6] )
// else
//     console.log('Yesterday was: ' + days[date.getDay() -1] );


//STEP 5

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dt = prompt('Enter date to know first letter of the day: ');
let date = new Date(dt);
console.log('Today is : ' + days[date.getDay()].charAt(0) + ' i.e ' + days[date.getDay()]);
