/* 1. Declare uma variável de nome weight
R:
var weight
*/

//-----------------------------------------------------------------------------------
// 2. Que tipo de dado é a variavel acima?
    //console.log(typeof weight)
//-----------------------------------------------------------------------------------

/* 3. Declare uma variavel e atribua valores para cada um dos dados:
    * name: String
    * age : Number 
    * stars: Number (float)
    * isSubscrideb: Boolean
var name = "Ana";
var age = 20;
var stars = 10.0;
var isSubscrideb = true;
*/

//---------------------------------------------------------------------------------------

// 4. A variável student abaixo é que tipo de dado?
    //let student = {};
//R:
    //console.log(student)
//O console.log nos apresenta um objeto vazio

//---------------------------------------------------------------------------------------

/* 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
R:
    let student = 
    {
        name : "Ana",
        age : 20,
        stars : 10.0,
        isSubscrideb : true
    };
    console.log(student)
*/

//----------------------------------------------------------------------------------------

/* 4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

//R:

var student = 
{
    name : "Ana",
    age : 20,
    weight : 61
};

console.log(student.name  + 'de idade' + student.age + 'pesa' + student.weight )
*/


//-----------------------------------------------------------------------------------
/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,
  somente o array vazio.

  R:
  var students = [];
  console.log(students)
*/

//-------------------------------------------------------------------------------------------
/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).

R:
students = [
    student
]
console.log(students)
*/

//---------------------------------------------------------------------------------------------
/* 7. Coloque no console o valor da posição zero do Array acima
 
R:
console.log(students[0])
*/

//---------------------------------------------------------------------------------------------
/* 8. Crie um novo student e coloque na posição 1 do Array students

R:
 const john = {
    name: "John",
    age: 23,
    weight: 60
}

students = [
    student,
    john
]

ou 

students[1] = john

console.log(students[1])
*/

//-------------------------------------------------------------------------------------
/* 9. Sem rodar o codigo responda qual é a resposta do código abaixo e por que? Após sua resposta
rode o código e veja.

console.log(a)

var a = 1

R: undefined, porque ela sofre uma elevação (hoists), ou seja minha variavel é declarada, roda o console,
e logo depois o valor e setado. Funcionando assim:

var a 

console.log(a)

a = 1
*/





