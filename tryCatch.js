//throw ---> disparar


//try(tentar)...catch(pegar)

//disparar um erro caso não seja passado um paramentro nessa função


function sayMyName(name = ''){

    if(name === ''){
        throw "Nome é obrigatorio"
    }

    console.log("Nome registrado")
    console.log(name)
}

try {
    sayMyName("Ana Gomes")
} catch(e){
    console.log(e)
}