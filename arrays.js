//Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim do array 
techs.push("NODEJS");

//adicionar no começo
techs.unshift("SQL")

//remover do fim
 techs.pop()

//remover do começo
/techs.shift()

//pegar somente alguns elementos do array
console.log(techs.slice(1,3))

//remover 1 ou mais items em qualquer posição 
techs.splice(0,2)

//encontrar a posição de um elemento no array 
let index = techs.indexOf("css")
  