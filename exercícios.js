//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
//depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu Quero Viver A Programação"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore)