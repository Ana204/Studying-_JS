var people = function(FirstName, SecondName)
{
    var Full_name = FirstName + SecondName
    return Full_name
}

let Name = "Ana";
let surname = "Gomes";

console.log(`O primeiro nome é: ${Name}`)
console.log(`O segundo nome é ${surname}`)
console.log(`O nome completo é: ${people(Name, surname)}`)