/**
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array: 
 * RECEITAS: [] 
 * DESPESAS: []
 * 
 * Agora, crie uma função que irá calcular o total de receitas e despesas
 * e irá mostrar uma mensagem se  a familia está com saldo positivo ou negativo, seguindo do valor do saldo
 */

//total de receitas - as despesas

var spent = {

    incomes: [320, 250.99],
    expense: [150, 700, 30.70, 10.10]

}

function sum(soma) {

    let total = 0;

    for(let value of soma){
        total += value
    }

    return total
}

function calculateBalance() {

    const calculateIcomes = sum(spent.incomes)
    const calculateExpense = sum(spent.expense)

    const total = calculateIcomes - calculateExpense

    const statusOk = total >= 0

    let balanceText = "Negativo"

    if (statusOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
    
}

calculateBalance()

