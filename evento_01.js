'use strict'; 


var readlinesync = require("readline-sync");
var opcao, inserirevento, quantEventos, strData, dataPartes, data, idade;
var QuantPalestrantes, Palestrantes, Participante, QuantidadeParcipante;

var evento = [], ListadePalestrantes = [], ListadeParticipantes = [];
const numerodeParticipantes = 100

do{
 console.log();
 console.log("\t\t---- Sistema de Cadastro de eventos ----");
 console.log("\tEscolha uma opcao: ");
 console.log("\t1 - Cadastrar evento");
 console.log("\t2 - Cadastrar Palestrantes");
 console.log("\t3 - Cadastrar Participante");
 console.log("\t4 - Listar evento");
 console.log("\t5 - Listar Palestrantes");
 console.log("\t6 - Listar Participante");
 console.log("\t0 - Sair do sistema");


 opcao = readlinesync.question("\tDigite a opcao desejada: ");

    switch(opcao){
        case '1':
            console.log("\t--- Cadastro de Eventos ---");
            strData = readlinesync.question("Digite uma data valida (00/00/0000): ");
            dataPartes = strData.split("/");
            data = new Date (dataPartes[2], dataPartes[1] - 1, dataPartes[0]);

        if(data < new Date()) {
            console.log("Evento nao pode ser cadastrado, desculpe o transtorno!");
        } else {  
            inserirevento= readlinesync.question("Digite o nome do evento: ");
            evento.push(inserirevento);
        }
            break;
        case'2':
            console.log("\t--- Cadastro de Palestrantes ---");
            QuantPalestrantes = ListadePalestrantes.length;
           if (QuantPalestrantes <0){
               console.log("Evento sem Palestrantes.");
      } else {
          Palestrantes = readlinesync.question("Digite o nome do Palestrante: ");
          ListadePalestrantes.push(Palestrantes);
      }
            break;
        case'3':
             console.log("\t--- Cadastro de Participantes---");
             QuantidadeParcipante = ListadeParticipantes.length;

             if (QuantidadeParcipante < numerodeParticipantes){
                 Participante = readlinesync.question("Digite o nome do particpante: ");
                 idade =  readlinesync.question("Digite sua idade: ");
             if (idade >= 18){
                 ListadeParticipantes.push(Participante);
             } else {
                 console.log("Nao permitido o cadastro por ser menor de idade!!!");
             }
            } else {
                console.log("Evento completo,nao ha mais vaga!");
            }
            break;
        case'4':
             console.log("\t\nLista de Eventos cadastrados");
             quantEventos = evento.length;
             console.log("\nExiste " + quantEventos + " " + evento[0]);
            break;
        case '5':
            console.log("\t\nLista de Palestrantes");
            QuantPalestrantes = ListadePalestrantes.length;
            console.log("\nExiste(m) " + QuantPalestrantes + " Palestrante(s) Cadastrado(s).");
            
            for(var indice = 0; indice < ListadePalestrantes.length; indice++){
                console.log("\nO nome do palestrante é: " + ListadePalestrantes[indice]);
            }
            break;
        case'6': 
            console.log("\t\nLista de participantes Cadastrados");
            QuantidadeParcipante = ListadeParticipantes.length;
            console.log("\nExiste(m) " + QuantidadeParcipante + " Participante(s) cadastrado(s).");
            for(var indice = 0; indice < QuantidadeParcipante; indice++){
                const patual = ListadeParticipantes[indice];
                console.log("\nParticipante nº " + (indice + 1) + " - " + patual);
            }
            break;
        case '0':
            console.log("\t\nAgradecemos por utilizar nosso sistema !!!\n");
            break;
        default:
            console.log();
            console.log("\t\nOpcao invalida tente novamente !");
    }
}while(opcao !=0);




