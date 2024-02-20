console.log(typeof(5))

console.log(typeof("to be or not to be"))

console.log(typeof(undefined))

console.log(typeof(true))

let a;
let b;
a=5
b=a
b=6

console.log(a)
console.log(b)

// le types d'objets de base 
liste = [1,2,3]
cliste = liste
cliste.push(5)

console.log(liste)
console.log(cliste)

stagaire = {
    id : 1,
    prenom : "soukaina"
}
cstg = stagaire
cstg.age =14
console.log(stagaire)
console.log(cstg)

// copie
liste2 = [].concate(liste)
// spread opera
liste3 = [...liste]

stagaire3 ={...stagiaire}
stagaire3.branche ="00"

Object.assign(stagaire3,stagaire)

liste2.push(9)
console.log(liste)
console.log(liste2)
console.log(liste3)


console.log(typeof(liste))







