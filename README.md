# 🚀 Teste Técnico

Este repositório contém as soluções para os testes técnicos propostos.

## 📝 Questão 1

**Pergunta:** 
Observe o trecho de código abaixo: 

```int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
```


Ao final do processamento, qual será o valor da variável SOMA?

**Resposta:** 

```javascript
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // O valor de SOMA será 91
```


## 📝 Questão 2

**Pergunta:** 

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

**Resposta:** 

```function isFibonacci(num) {
    let a = 0;
    let b = 1;
    if (num === a || num === b) return true;
    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
    }

    const number = 21; // Substitua pelo número desejado
    if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
```


## 📝 Questão 3

**Pergunta:** 

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**Resposta:** 

```const faturamentoDiario = [/* insira os valores do JSON ou XML aqui */];

    function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);
    const mediaMensal = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
    }

    const resultado = calcularFaturamento(faturamentoDiario);
    console.log(`Menor valor: ${resultado.menorValor}`);
    console.log(`Maior valor: ${resultado.maiorValor}`);
    console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
```

## 📝 Questão 4

**Pergunta:** 

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Resposta:** 

```const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, val) => acc + val, 0);

for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentoTotal * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
}
```

## 📝 Questão 5

**Pergunta:** 

Escreva um programa que inverta os caracteres de um string.

**Resposta:** 

```function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const stringOriginal = "exemplo"; // Altere esta string para testar outras
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${inverterString(stringOriginal)}`);
```

## 🚀 Como Executar o Programa

Para executar o programa e visualizar os resultados no navegador, siga os passos abaixo:

### Instalar o `http-server`

Se ainda não tiver o `http-server` instalado, você pode instalá-lo usando o npm:

1. Instalar o http-server: Se ainda não tiver o http-server instalado, você pode instalá-lo usando o npm:
   

```npm install -g http-server
```

2. Iniciar o servidor HTTP: Navegue até o diretório onde estão seus arquivos e inicie o servidor:

``` Sistema
http-server
```

3. Acessar os arquivos via HTTP: O http-server por padrão serve os arquivos na porta 8080. Então, você pode acessar seus arquivos no navegador através do endereço:

``` http://localhost:8080
```