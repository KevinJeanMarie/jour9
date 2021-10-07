//01
var jour = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi",];
console.log(jour)

function whatDayIsToday (){
    var dateGlobale = new Date ();

    var day1 ="Aujourd'hui nous sommes xxx";
    day1 = day1.replace("xxx", jour[dateGlobale.getDay()])
    console.log(day1)

}

whatDayIsToday()

//02

var mois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre",
"novembre","decembre",];
console.log(mois)

function whatMonthIsIt (){
    var dateGlobale = new Date ();

    var month ="Aujourd'hui nous sommes au mois de xxx";
    month = month.replace("xxx", mois[dateGlobale.getMonth()])
    console.log(month)

}

whatMonthIsIt()

//03 
var date1 = ("2021-10-07")

function formatdate(date1){
    return date1 + date1;

}
console.log(date1)
