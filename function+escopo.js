let aumento;
function nomeSalario(){
    do{
    nome = prompt('insira seu nome: ');
    salario = parseFloat(prompt('insira seu salario: '));

    if(salario <= 1500){
        prct = 20;
        aumento = (prct*salario)/100;
        aumento = salario + aumento;
    }else if(salario > 1500 && salario <= 2000){
        prct = 15;
        aumento = (prct * salario)/100;
        aumento = salario + aumento;
    }else if(salario > 2000 && salario <= 3000){
        prct = 10;
        aumento = (prct * salario)/100;
        aumento = salario + aumento;
    }else{
        prct = 5;
        aumento = (5 * salario)/100;
        aumento = salario + aumento;
    }
    console.log(nome+' , '+salario+' , '+prct+'% , '+aumento);
    function prgt(){
        opc = parseInt(prompt('insira "1" se deseja reajustar: '));
    }
    prgt();
}while(opc == 1)
}

