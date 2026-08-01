// ===============================
// ABRIR ENVELOPE
// ===============================


const envelope = document.querySelector(".envelope");


envelope.addEventListener("click", ()=>{


    envelope.classList.toggle("abrir");


});

// ===============================
// CORAÇÕES
// ===============================


const coracoes = document.getElementById("coracoes");


function criarCoracao(){


    const coracao = document.createElement("div");


    coracao.classList.add("coracao");


    coracao.innerHTML="💜";


    coracao.style.left =
    Math.random()*100+"vw";


    coracao.style.fontSize =
    (20 + Math.random()*30)+"px";


    coracao.style.animationDuration =
    (4 + Math.random()*5)+"s";


    coracoes.appendChild(coracao);



    setTimeout(()=>{

        coracao.remove();

    },9000);


}



setInterval(criarCoracao,300);


// ===============================
// PARTÍCULAS
// ===============================


const particulas =
document.getElementById("particulas");



function criarParticula(){


    const particula =
    document.createElement("div");


    particula.classList.add("particula");



    particula.style.left =
    Math.random()*100+"vw";



    const tamanho =
    (3 + Math.random()*6)+"px";


    particula.style.width=tamanho;

    particula.style.height=tamanho;



    particula.style.animationDuration =
    (5 + Math.random()*8)+"s";



    particulas.appendChild(particula);



    setTimeout(()=>{

        particula.remove();

    },13000);


}



setInterval(criarParticula,250);

// ===============================
// TEXTO DA CARTA
// ===============================


const textoCarta =
`Meu amor, acho que você nunca vai entender o tamanho do bem que você faz na minha vida.Palavras se tornam insuficientes para descrever todo amor que sinto por você, mas que você possa vê-los em meus gestos, porque o amor que tenho por você é maior que qualquer texto que eu possa te escrever. 
Você se tornou o meu lugar de paz, a pessoa que consegue acalmar o meu coração.Eu amo quem eu sou quando estou do seu lado, como
você torna meus dias mais leves e transforma momentos simples em lembrança que eu vou me lembrar pra sempre. E se algum dia eu tiver que escolher o meu lugar favorito no mundo, não será uma cidade ou praia  ou uma paisagem bonita, será qualquer lugar que você esteja, porque no fim, é você quem faz qualquer lugar parecer casa. 
EU TE AMO MUITO, MINHA PRINCESA. 💜🤍`;



function escreverCarta(){

    let i = 0;


    function escrever(){


        if(i < textoCarta.length){


            document.getElementById("textoCarta").innerHTML += textoCarta.charAt(i);


            i++;

            setTimeout(escrever,40);


        }


    }


    escrever();

}


// ===============================
// MOSTRAR CARTA APÓS ABRIR ENVELOPE
// ===============================


const paginaCarta =
document.getElementById("paginaCarta");


const envelopeElemento =
document.querySelector(".envelope");



envelopeElemento.addEventListener("click", ()=>{


    envelopeElemento.classList.add("abrir");


    setTimeout(()=>{


        envelopeElemento.style.display="none";


        paginaCarta.style.display="block";


        escreverCarta();


    },1500);



});

// ===============================
// ABRIR FOTO GRANDE
// ===============================


const fotos =
document.querySelectorAll(".galeria img");


const visualizador =
document.getElementById("visualizador");


const fotoGrande =
document.getElementById("fotoGrande");



fotos.forEach((foto)=>{


    foto.addEventListener("click", ()=>{


        visualizador.style.display="flex";


        fotoGrande.src=foto.src;


    });


});



visualizador.addEventListener("click", ()=>{


    visualizador.style.display="none";


});



// ===============================
// CONTADOR DO RELACIONAMENTO
// ===============================


const inicio =
new Date("2026-06-29T00:00:00");



function atualizarTempo(){


    const agora = new Date();


    const diferenca =
    agora - inicio;



    const dias =
    Math.floor(
    diferenca /
    (1000*60*60*24)
    );


    const horas =
    Math.floor(
    (diferenca /
    (1000*60*60))
    %24
    );


    const minutos =
    Math.floor(
    (diferenca /
    (1000*60))
    %60
    );


    const segundos =
    Math.floor(
    (diferenca /
    1000)
    %60
    );



    document.getElementById("tempoJuntos").innerHTML =

    dias + " dias, " +
    horas + " horas, " +
    minutos + " minutos e " +
    segundos + " segundos 💜";


}



setInterval(atualizarTempo,1000);


atualizarTempo();