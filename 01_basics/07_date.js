const DateTIme = new Date;

// console.log(DateTIme.toString())
// console.log(DateTIme.toDateString())
// console.log(DateTIme.toLocaleDateString())
// console.log(DateTIme.toISOString())
// console.log(typeof DateTIme)


const newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

console.log(newDate.toLocaleString())

console.log(newDate.toLocaleString('default' , {
    weekday:'long'
}))
console.log(newDate.toLocaleString())