'use strict'

const semaforo = document.getElementById('semaforo');
const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');
const auto = document.getElementById('auto');
const tudoof = document.getElementById('offtudo');
let iidauto = null;
let iidautored = null;


function onvermelho() {

    semaforo.src = './img/vermelho.png';

}

const onamaralo = () => {

    semaforo.src = './img/amarelo.png'

}

const onverde = () => {

    semaforo.src = './img/verde.png'
}

function offtudo() { /* funcao para desligar o semaforo*/
    if (!verderepetidor || vermelhorepetidor) {


        semaforo.src = './img/desligado.png'
    }

}


const verderepetidor = () => {

    return semaforo.src.includes('verde');
}

const vermelhorepetidor = () => {
    return semaforo.src.includes('vermelho');
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

function atuosemaforored() {

    if (vermelhorepetidor()) {

        return semaforo.src = './img/verde.png';
    } else {}
}



const automatico = () => {
    if (iidauto == null || iidautored == null) {
        iidauto = setInterval(atuosemaforo, 1000);
        iidautored = setInterval(atuosemaforored, 3000);
        auto.textContent = 'parar'
    } else {

        clearInterval(iidauto);
        clearInterval(iidautored);
        auto.textContent = 'auto';
        iidauto = null;
        iid = null;
    }


}

vermelho.addEventListener('click', onvermelho);
amarelo.addEventListener('click', onamaralo);
verde.addEventListener('click', onverde);
tudoof.addEventListener('click', offtudo);
auto.addEventListener('click', automatico);