alert('Boas vindas ao jogo do número secreto'); //alerta na pagina

let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);//let é para criar variavel 
console.log(numeroSecreto);
let chute; //variavel chute armazena o valor insirido pelo usuario 
let tentativas = 1;


//enquanto
while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(chute == numeroSecreto){  //compara com o numero secreto 
        break; //para
    } 
    else {
        alert('Você errou :(');
    
        if(chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativa = tentativas + 1 
        tentativas ++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    alert(`Isso ai, você acertou o número secreto!! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);
