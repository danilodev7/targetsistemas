
const fs = require('fs');
const xml2js = require('xml2js');

// Função para ler dados do arquivo XML
function readXMLFile(filePath) {
    const xml = fs.readFileSync(filePath, 'utf8');
    let jsonData;
    xml2js.parseString(xml, (err, result) => {
        if (err) throw err;
        jsonData = result.row.map(row => ({
            dia: parseInt(row.dia[0]),
            valor: parseFloat(row.valor[0])
        }));
    });
    return jsonData;
}

// Função para ler dados do arquivo JSON
function readJSONFile(filePath) {
    const json = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(json);
}

// Função para calcular menor, maior e média de faturamento
function calculateFaturamento(data) {
    const valores = data.map(d => d.valor).filter(v => v > 0);
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = data.filter(d => d.valor > media).length;

    return { menor, maior, media, diasAcimaMedia };
}

// Função para calcular percentual de representação por estado
function calculatePercentual(faturamento) {
    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
    const percentual = {};
    for (const estado in faturamento) {
        percentual[estado] = ((faturamento[estado] / total) * 100).toFixed(2) + '%';
    }
    return percentual;
}

// Caminhos dos arquivos
const xmlFilePath = './dados (2).xml';
const jsonFilePath = './dados.json';

// Leitura dos dados
const xmlData = readXMLFile(xmlFilePath);
const jsonData = readJSONFile(jsonFilePath);

// Cálculo de faturamento
const faturamentoXML = calculateFaturamento(xmlData);
const faturamentoJSON = calculateFaturamento(jsonData);

console.log('Faturamento XML:', faturamentoXML);
console.log('Faturamento JSON:', faturamentoJSON);

// Dados de faturamento mensal por estado
const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Cálculo de percentual de representação

const percentual = calculatePercentual(faturamentoMensal);
console.log('Percentual de representação por estado:', percentual);