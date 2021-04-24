let dateShow = document.getElementById("date")
// console.log(dateShow)
let dateBegin = new Date(2018,10,21,23,59,59,59).getTime()
dateShow.innerHTML = "Love Time"
let dateNow = Date.now()
// console.log(dateBegin)
// console.log(dateNow)
let Time = dateNow - dateBegin
// console.log(Time)
let parseDays = Math.floor(Time/(1000*60*60*24))
let parseHours = Math.floor((Time-parseDays*(1000*60*60*24))/(1000*60*60))
let parseMinutes = Math.floor((Time-parseDays*(1000*60*60*24)-parseHours*(1000*60*60))/(1000*60))
let parseSeconds = Math.floor((Time-parseDays*(1000*60*60*24)-parseHours*(1000*60*60)-parseMinutes*(1000*60))/(1000))
console.log(parseDays)
function updateDate() {
    dateShow.innerHTML = parseDays +" Days : "+ parseHours+" Hours : "+parseMinutes+" Minutes : "+parseSeconds+" Seconds"
    console.log(Time)
}