class Car{
    nome;
    potencia;
    velocMax;
    aceleracao;
    dist;

    constructor(nome , potencia , velocMax , aceleracao , dist){
        this.nome = nome;
        this.potencia = potencia;
        this.velocMax = velocMax;
        this.aceleracao = aceleracao;
        this.dist = dist
    }
    calculo(){
        this.dist = prompt('insira a distancia em metros: ');
        console.log('o veiculo da equipe ' + this.nome +' percorreria essa distancia em '+ parseInt(this.dist/(this.velocMax/this.aceleracao)) + ' segundos.');
    }
}

let opcao;
let cars = [];
let cont = 0;

 //opcao = parseInt(prompt('o que deseja fazer: \n1 - cadastrar veiculo \n2 - cadastrar corrida \n3 - Sair'));
do{
nome = prompt('insira o nome da equipe do veiculo: ');
potencia = prompt('insira a potencia em cavalos: ');
velocMax = prompt('insira sua velocidade maxima: ');
aceleracao = prompt('insira em quanto tempo o veiculo vai de 0 a 100km/h');
let carro = new Car(nome , potencia , velocMax , aceleracao);
cars[cont] = carro;
cont++

opc = parseInt(prompt('o que deseja fazer: \n1 - cadastrar mais carros \n2 - voltar \n3 - sair'));

}while(opc == 1)
