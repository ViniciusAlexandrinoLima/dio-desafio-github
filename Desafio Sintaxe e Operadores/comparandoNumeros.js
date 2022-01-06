function comparandoNumeros(numero1, numero2) {
    
    if(!numero1 && !numero2) {return `Preencha os numeros!`};
    
    let soma = numero1 + numero2;
    if(numero1 !== numero2) {
        console.log(`Os numeros ${numero1} e ${numero2} não são iguais.`);
        if(soma > 10) {
            console.log(`Sua soma é: ${soma} que é maior que 10.`);
        }else if(soma > 10 && soma >= 20) {
            console.log(`Sua soma é: ${soma} que é maior que 20.`)
        } 
    }


    if(numero1 === numero2) {
        console.log(`Os numeros ${numero1} e ${numero2} são iguais.`);
    }
    if(soma < 10) {
        console.log(`Sua soma é: ${soma} que é menor que 10.`);
    } else if(soma < 10 && soma <= 20) {
        console.log(`Sua soma é: ${soma} que é menor que 20.`)
    } 
}

comparandoNumeros(10, 10);