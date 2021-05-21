//Entendendo função de uma forma simples
//Função é um lidiquidificador 

//Coloco no lidiquidificador 2 frutas, ou seja passando dois parâmetros para a função
function FazerSuco(fruta1, fruta2) 
{
    //Dou um retorno nessas 2 frutas
    return fruta1 + fruta2
}

//Chamo a função, passando dois argumetos pra ela, ou seja o nome das frutas
//Colocando já o suco batido dentro de um copo.

const copo = FazerSuco('Banana', 'Maçã')

console.log(copo)