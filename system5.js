let opc;
let nome;
let senha;
let userNome = [];
let userSenha = [];
let sn = false;

function teste(op){
    op = parseInt(prompt('bem vindo! o que deseja fazer:\n1 - cadastrar-se \n2 - login \n3 - excluir cadastro \n4 - encerrar programa '));
    opc = op;
}
let count = 0;
let cLog = 0;
let existencia = false

do{
    teste(opc);
switch(opc){
    case 1:
        userNome[count] = prompt('inira seu nome de usuario: ');
        userSenha[count] = prompt('insira sua senha: ');
        count++

        console.log('cadastro feito com sucesso!');
    break;
    case 2:
        existencia = false;
        nome = prompt('inira seu nome de usuario: ');
        senha = prompt('insira sua senha: ');

        for(c = 0; c <= userNome.length ; c++){
            if(nome == userNome[c] && senha == userSenha[c]){
                c = userNome.length;
                console.log('login bem sucedido!');
                existencia = true;
            }
        }
        if(existencia != true){
            console.log('usuario ou senha invalidos.');
        }
    break;
    case 3:
        do{
        if(sn == false && senha != 2){
            console.log('senha inválida');
        }
        senha = prompt('insira sua senha para confirmar exlcusão de conta(2 - Sair): ');
        if(senha == 2){
            sn = false;
        }

       for(c = 0; c <= userNome.length ; c++){
        if(nome == userNome[c] && senha == userSenha[c]){
            c = userNome.length;
            index = userNome.indexOf(nome);
            userNome.splice(index,1);
            userSenha.splice(index,1);
            console.log('exclusão feita!');
            sn = true;
        }
       }
    }while(sn == false)
        
    break;
    case 4:
        console.log('programa encerrado...');
    break;
    default:
        console.log("f :(");
    }
}while(opc != 4)
