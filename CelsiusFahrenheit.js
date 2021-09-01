
function transformDeGree(degree) {
    
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {

        throw new Error('Grau não indentificado')
    }

    let updatedDeGree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let deGreeSign = 'C'

    if(celsiusExists){

        updatedDeGree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        deGreeSign = 'F'
    }

    return formula(updatedDeGree) + deGreeSign
}

try {
    
    console.log(transformDeGree('10C'))
    console.log(transformDeGree('50F'))
    //transformDeGree('50z')

} catch (error) {
    console.log(error)
}
