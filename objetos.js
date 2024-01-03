class Pc{
    type
    process
    armz
    ram
    ssd
    
    constructor(type , process , armz , ram , ssd){
        this.type = type
        this.process = process
        this.armz = armz
        this.ram = ram
        this.ssd = ssd
    }
    apresentarPc(){
        console.log('um ' + this.type + 'com processador ' + this.process +', armazenamento de ' + this.armz + 'gb, memória RAM de ' + this.ram + 'gb e este dipositivo ' + this.ssd + ' possui ssd.')
    }
}

let type = prompt('insira o tipo de dispositivo (desktop ou notebook): ');
let process = prompt('insira qual processador tem o seu ' + type + ': ');
let armz = prompt('insira o armazenamento do seu ' + type + 'em GBs: ');
let ram = prompt('insira quanto espaco de RAM possui em GBs: ');
let ssd = prompt('insira 1 se seu dispositivo possui ssd: ');
if(ssd != 1){
    ssd = 'nao'
}else{
    ssd = 'sim'
}
let disp = new Pc(type , process , armz , ram , ssd);
