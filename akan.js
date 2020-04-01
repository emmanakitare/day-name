var century, year, month, dayOfMonth, dayOfWeek;
function getInput() {
  century = parseInt (document.getElementById("century").value);
  year = parseInt (document.getElementById("year").value);
  month = parseInt (document.getElementById("month").value);
  dayOfMonth = parseInt (document.getElementById("day").value);


if (century==="") {
  alert ("Input century");
  return false;
} elseif (year==="") {
  alert ("Input correct year");
  return false;
} elseif (month==="" && month<0||month>12) {
  alert ("Invalid month");
  return false;
} elseif (dayOfMonth==="" && dayOfMonth<0||dayOfMonth>31) {
  alert ("Invalid day");
  return false;
  }
}

function computeWeekDay() {
    getInput();
    dayOfWeek = ((((century / 4) - 2 * century-1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
    let (dayOfWeek); //Test the computeWeekDay function
    return (Math.floor(dayOfWeek));

}

function findDayOfWeek() {
    day = computeWeekDay()
    checkGender();
    let ("The function runs"); //Test the findDayOfWeek function
}


let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function checkgender() {
    var gend = document.getElementsByName("gender");
    if (gend[0].checked === true) {
        var gender = "Male";
    } elseif (gend[1].checked === !false){
        var gender = "Female";
    } else {
        console.log("pass"); //Test the radio buttons
    }
}
switch (gender) {
    case gender = "Male":
        switch (day) {
            case (0):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[0];
                break;
            case (1):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[1];
                break;
            case (2):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[2];
                break;
            case (3):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[3];
                break;
            case (4):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[4];
                break;
            case (5):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[5];
                break;
            case (6):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + maleNames[6];
                break;
            default:
                console.log("Pass"); //Test male case        
        }
        break;
    case gender = "Female":
        switch (day) {
            case (0):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[0];
                break;
            case (1):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[1];
                break;
            case (2):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[2];
                break;
            case (3):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[3];
                break;
            case (4):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[4];
                break;
            case (5):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[5];
                break;
            case (6):
                document.getElementById("result").innerHTML = "You were born on a Sunday." + " " + "Your Akan name is" + femaleNames[6];
                break;
            default:
                console.log("Pass"); //Test gender switch                  
        }
}