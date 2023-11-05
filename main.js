function tocarSom (seletorDeAudio) { 
   const elemento = document.querySelector(seletorDeAudio);

   if (elemento === null) {
        alert('Som não encontrado.');
   }

   if (elemento != null) {
        elemento.play();
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para - outra forma de utilizar o código já lançando a constante, o intervalo e a soma.    
for (let contador = 0 ; contador <listaDeTeclas.length; contador++) {
     
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocarSom(audio);
    }
    tecla.onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

