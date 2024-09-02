console.log('blz')

function questaoUm() {
    let k = 0; // inicializa k com 0
    let soma = 0; // inicializa soma com 0
    const indice = 13; // define o valor do índice

    // loop for para iterar enquanto k for menor que indice
    for (let i = k; i < indice; i++) {
        soma += i; // adiciona o valor de i à soma
    }

    console.log(soma); // imprime o resultado final
}



function questaoDois(number) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0;
    let b = 1;
    

    if (number === a || number === b) {
        return console.log(`O número ${number} pertence à sequência de Fibonacci.`);
    }
    

    let proximoNumero = a + b;
    while (proximoNumero <= number) {
        if (proximoNumero === number) {
            return console.log(`O número ${number} pertence à sequência de Fibonacci.`);
        }
        a = b;
        b = proximoNumero;
        proximoNumero = a + b;
    }

    // Se o número informado não foi encontrado, ele não pertence à sequência
    return console.log(`O número ${number} não pertence à sequência de Fibonacci.`)
}

// Questão 3 
// Exemplo de vetor de faturamento diário (valores de exemplo)
const faturamentoDiario = [
    { dia: 1, valor: 0.0 },
    { dia: 2, valor: 14.16 },
    { dia: 3, valor: 37.66},
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 40.61 },
    { dia: 12, valor: 30.61 },
    { dia: 26, valor: 5.61 },
    { dia: 30, valor: 50.0 }
];

function questaoTres(faturamentoDiario) {
    let menorValor = Infinity;  
    let maiorValor = -Infinity; 
    let mediaValor = 0
    let soma = 0;             
    let diasComFaturamento = 0; 


    for (let i = 0; i < faturamentoDiario.length; i++) {
        const faturamento = faturamentoDiario[i].valor;

     
        if (faturamento > 0) {
            if (faturamento < menorValor) menorValor = faturamento;
            if (faturamento > maiorValor) maiorValor = faturamento;
            soma += faturamento;
            diasComFaturamento++;
        }
    }

    // Calcula a média mensal de faturamento
    const media = soma / diasComFaturamento;
     mediaValor = media
    // Conta os dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamentoDiario.length; i++) {
        const faturamento = faturamentoDiario[i].valor;

        // Ignora dias sem faturamento
        if (faturamento > 0 && faturamento > media) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorValor,
        maiorValor,
        mediaValor,
        diasAcimaDaMedia
    };
}


// Questão Quatro

// Faturamento mensal por estado
const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamentoMensal).reduce((acc, valor) => acc + valor, 0);

// Função para calcular o percentual de cada estado
function calcularPercentual(faturamento, total) {
    return (faturamento / total * 100).toFixed(2);
}



// Função para inverter uma string
function questaoCinco(str) {
    let stringInvertida = '';
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return console.log(`String invertida: ${stringInvertida}, sendo "${str}" a string original.`);
}








questaoUm() 

// Procure o numero que deseja no parâmetro da questaoDois. Ex: 22

questaoDois(22)

const resultadoQuestaoTres = questaoTres(faturamentoDiario);

console.log(`Menor valor de faturamento: ${resultadoQuestaoTres.menorValor}`);
console.log(`Maior valor de faturamento: ${resultadoQuestaoTres.maiorValor}`);
console.log(`Dias com faturamento acima da média: ${resultadoQuestaoTres.diasAcimaDaMedia}, sendo a média: ${resultadoQuestaoTres.mediaValor.toFixed(2)}`);


//Questão 4

for (const estado in faturamentoMensal) {
    const percentual = calcularPercentual(faturamentoMensal[estado], faturamentoTotal);
    console.log(`O percentual de ${estado} é ${percentual}%`);
}


// Digite a string que deseja inverter. Ex: teste
questaoCinco('teste')