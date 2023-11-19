let nomes = [];
let codes = [];
let nome = ".";
let code = ".";
let Ncadastros = 0;
let info = " ";
let verify = true;
let iden = 0;
let opcao = 5;
while (opcao != 4) {
  opcao = prompt("bem vindo " + nome[iden + 1] + "\n1- cadastrar - se \n2 - login \n3 - excluir conta \n4 - sair");

  if (opcao == 1) {
    info = "";
    do {
      do {
        verify = true;
        nome = prompt(info + "\nInsira um nome(5 - menu): ");
        if (nome == 5) {
          opcao = 5;
        }

        for (i = 0; i <= Ncadastros; i++) {
          if (nome == nomes[i]) {
            i = Ncadastros;
            info = "esse nome já existe, tente outro.";
            verify = false;
          }
        }
      } while (verify == false);

      if (nome != 5) {
        code = prompt("Insira uma senha(5 - voltar): ");
      }
    } while (code == 5);

    if (nome != 5) {
      Ncadastros++;
      nomes[Ncadastros] = nome;
      codes[Ncadastros] = code;
      console.log("Cadastro bem sucedido!");
    }


  } else if (opcao == 2) {

    info = "";
    do {
      do {

        verify = true;
        nome = prompt("Insira o nome de usuário(5 - menu): ");
        if (nome == 5) {
          opcao = 5;
        }

        if (nome != 5) {
          code = prompt("Insira sua senha(5 - voltar): ");

          if (code != 5) {
            for (let c = 0; c <= Ncadastros; c++) {
              if (nomes[c] == nome && codes[c] == code) {
                iden = c;
                c = Ncadastros;
                info = "login successfully, welcome " + nomes[iden];
                verify = true;
              } else {
                info = "usuário ou senha inválidos.";
                verify = false;
              }
            }
          }

        }
        console.log(info);
      } while (code == 5);
    } while (verify == false);

  } else if (opcao == 3) {
    info = " ";
    do {
      do {
        do {

          verify = true;
          nome = prompt("Insira o nome do usuário a exluir(5 - menu): ");
          if (nome == 5) {
            opcao = 5;
            confirm = 1;
          }

          if (nome != 5) {
            code = prompt("Insira sua senha(5 - voltar): ");

            if (code != 5) {
              for (let c = 0; c <= Ncadastros; c++) {
                if (nomes[c] == nome && codes[c] == code) {
                  iden = c;
                  c = Ncadastros;
                  verify = true;
                } else {
                  info = "usuário ou senha inválidos.";
                  verify = false;
                }
              }
            }

          }
          console.log(info);
        } while (code == 5);
      } while (verify == false);

      if (opcao != 5) {
        var confirm = prompt("Insira '1' para confirmar a exclusão ou 2 para voltar\n(!!!Após essa etapa, não será possível retornar!!!):");
      }
    } while (confirm == 2);

    if (confirm == 1) {
      for (let c = iden; c <= Ncadastros - 1; c++) {
        nomes[c] = nomes[c + 1];
        codes[c] = codes[c + 1];
      }
      Ncadastros = Ncadastros - 1;
    }

  }
}
