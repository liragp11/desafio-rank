let vitorias = 80
let derrotas = 10

calculaRank(vitorias,derrotas)

function calculaRank(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let rank
    
    if(saldoVitorias <=10){
        rank = 'Ferro'
    }
    else if(saldoVitorias>10 && saldoVitorias <=20){
        rank = 'Bronze'
    }
    else if(saldoVitorias>20 && saldoVitorias <=50){
        rank = 'Prata'
    }
    else if(saldoVitorias>50 && saldoVitorias <=80){
        rank = 'Ouro'
    }
    else if(saldoVitorias>80 && saldoVitorias <=90){
        rank = 'Diamante'
    }
    else if(saldoVitorias>90 && saldoVitorias <=100){
        rank = 'Lendário'
    }
    else if(saldoVitorias>100){
        rank = 'Imortal'
    }

    const msgRank = 'O Herói tem o saldo de ' + saldoVitorias +
    ' vitórias e está no nível ' + rank;

    console.log(msgRank);
}