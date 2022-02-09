'use strict'

const semaforo = document.getElementById('semaforo');
const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');
const auto = document.getElementById('auto');
const tudoof = document.getElementById('offtudo');
let iidauto = null;


function onvermelho() {

    semaforo.src = './img/vermelho.png';

}

const onamaralo = () => {

    semaforo.src = './img/amarelo.png'

}

const onverde = () => {

    semaforo.src = './img/verde.png'
}

function offtudo() {   /* funcao para desligar o semaforo*/
    semaforo.src = './img/desligado.png'
}

const verderepetidor = () => {

    return semaforo.src.includes('verde');
}



/*atomatizaçao do semaforo*/


const amarelorepetidor = () => {

    return semaforo.src.includes('desligado');
}

function atuosemaforo() {

    if (verderepetidor()) {

        semaforo.src = './img/amarelo.png';

    } else {

        semaforo.src = './img/vermelho.png';
    }
}



const automatico = () => {
    if(iidauto == null){
        iidauto = setInterval(atuosemaforo, 500);
        auto.textContent = 'parar'
    }else{

        clearInterval(iidauto);
        auto.textContent = 'auto';
        iidauto = null;
    }
    

}

vermelho.addEventListener('click', onvermelho);
amarelo.addEventListener('click', onamaralo);
verde.addEventListener('click', onverde);
tudoof.addEventListener('click', offtudo);
auto.addEventListener('click', automatico);