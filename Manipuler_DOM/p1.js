// let element1 = document.createElement('p');
// console.log(element1); 

// let element2 = document.createElement('div');
// console.log(element2); 

// let element3 = document.createElement('div');
// console.log(element3); 


// creation et suppression d'un élement DOM
document.querySelector(".cliqui").addEventListener("click",()=>{
const parent = document.querySelector(".section-1")

const enfant = document.createElement("h1")

enfant.innerHTML = "Learn JS"
enfant.style.backgroundColor = "red";
parent.append(enfant);

const nom = document.createElement("h1")
Comment.innerHTML = "votre nom";
nom.style.color = "yellow";
parent.prepend(nom);})


//
document.querySelector(".sup").addEventListener("click",()=>{
    const parent = document.querySelector(".section-1")
    
    const enfant = document.createElement("h1")
    
    enfant.innerHTML = "Learn JS"
    enfant.style.backgroundColor = "red";
    parent.remove(enfant);
    
    const nom = document.createElement("h1")
    Comment.innerHTML = "votre nom";
    nom.style.color = "yellow";
    parent.remove(nom);})
