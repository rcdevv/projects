let hoteis = [];
let reservas = [];

class Hotel{
    idHotel;
    nome;
    categoria;
    preco;
    endr;
    telf;

    constructor(idHotel , nome , categoria , preco , endr , telf){
        this.idHotel = idHotel;
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.endr = endr;
        this.telf = telf;
    }
}

class Reserva{
    id;
    idHotel;
    nomeResp;
    diaEntra;
    diaSaida;

    constructor(id , idHotel , nomeResp , diaEntra , diaSaida){
        this.id = id
        this.idHotel = idHotel;
        this.nomeResp = nomeResp;
        this.diaEntra = diaEntra;
        this.diaSaida = diaSaida;
    }
}

function cadastrarHotel(idHotel, nome , categoria , endr , telf , hotel){
    idHotel = prompt('Insira id do hotel: ');
    nome = prompt('nome hotel');
    categoria = prompt('categoria hotel');
    endr = prompt('endereço hotel');
    telf = prompt('telefone hotel');
    hotel = new Hotel(idHotel , nome , categoria , endr , telf);
    hoteis.push(hotel);
}

function cadastrarReserva(id , idHotel , nomeResp , diaEntra , diaSaida , cacaIdHotel, reserva){
do{
    v = 1
    id = prompt('Insira o id do hotel');
    idHotel = prompt('id hotel relacionado');
    cacaIdHotel = hoteis.find(function(idH){
        return idH.idHotel === idHotel;
    })
    if(cacaIdHotel){
    nomeResp = prompt('nome reponsavel');
    diaEntra = prompt('dia entrada');
    diaSaida = prompt('dia saida');
    reserva = new Reserva(id , idHotel , nomeResp , diaEntra , diaSaida);
    reservas.push(reserva);
  }else{
    console.log('id desconhecido, hotel não cadastrado');
    v = 0;
  }
}while (v == 0)
}

function mostrarReservas(idProcurado , reservasEncontradas) {
    idProcurado = prompt('insira o id do hotel');
    reservasEncontradas = reservas.filter(function(reserv) {
        return reserv.idHotel === idProcurado;
    });

    if(reservasEncontradas.length > 0){
        reservasEncontradas.forEach(function(reserva) {
            console.log("ID da Reserva:", reserva.id);
            console.log("Nome do Responsável:", reserva.nomeResp);
            console.log("Data de Entrada:", reserva.diaEntra);
            console.log("Data de Saída:", reserva.diaSaida);
            console.log("------------------------");
        });
        }else{
            console.log('id ',idProcurado,' não encontrado')
    }
}

function mostrarHotelDaReserva() {
    const idReserv = prompt('Insira o id da reserva: ');

    // Encontrar a reserva com base no idReserv
    const reservaEncontrada = reservas.find(reserva => reserva.id === idReserv);

    if (reservaEncontrada) {
        const idHotelReserva = reservaEncontrada.idHotel;

        // Encontrar o hotel com base no idHotelReserva
        const hotelEncontrado = hoteis.find(hotel => hotel.idHotel === idHotelReserva);

        if (hotelEncontrado) {
            console.log("Nome do Hotel:", hotelEncontrado.nome);
            console.log("Endereço do Hotel:", hotelEncontrado.telf);
        } else {
            console.log("Hotel não encontrado para o ID da Reserva:", idReserv);
        }
    } else {
        console.log("Reserva não encontrada para o ID fornecido:", idReserv);
    }
}

cadastrarHotel();

console.log(hoteis[0]);

cadastrarReserva();

console.log('passou pelo cadastrarReserva');

mostrarReservas();

console.log('passou pelo mostrarReservas');

mostrarHotelDaReserva();

console.log('passou pelo mostrarHotelDaReserva');


