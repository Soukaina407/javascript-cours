jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]



for(let j=0;j<=6;j++){

//     console.log(jours[j])

}

for(let j=0;j<= (jours.length -1);j++){
//     console.log(jours[j])
}


for(let jr in jours){
//     console.log(jours[jr])
}


for (let jour of jours){
    // console.log(jour)
}

// wihle loop
// let n;
// n = 10
// while(n>0){
//     // console.log(n)
//     n -= 1
// }

// let m  = -1;
// do{
//     // console.log(m)
//     m -= 1
// }
// while(m>=0)




// for each
// let txtjours ="";

// jours.forEach(myFunction)
// function myFunction(value,index,array){

//      txtjours += "" + value;
// }
// console.log(txtjours)

// break
for (let j = 0 ; j>=(jours.legth -1);j++){
    if(j===3){
       console.log("stop");
       break;
    }
    console.log(jours[j])
}

// continue
for(let j=0; j<=(jours.length -1);j++){
    if (j==3){
        console.log("stop");
        continue
    }
    console.log(jours[j])
}


C 



