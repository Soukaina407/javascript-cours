let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown Day";
}

console.log("Today is " + day);


let abreviation = "DD"
switch(abreviation){
    case "DD": 
        branch="developemment Digital";
         break;
    case "bD":
        branche="Resau";
        break;
    case "vd":
        branch="Mecaninique"
        break;
    default:
        branch ="no  "

}
console.log("ton Branche est"+ branch)
   



