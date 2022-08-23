const chalk = require('chalk');
const pegaArquivo = require('./index.js')
const caminho = process.argv;
const validaURLs = require('./http-validacao');

async function processaTexto(caminhoDeArquivo)
{
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar')
    {
        console.log(chalk.yellow('Links Validados:'), await validaURLs(resultado));
    }
    else
    {
        if (typeof resultado != 'undefined')
        {
            console.log(chalk.yellowBright('Lista de Links:'), chalk.red(resultado));
        }
    }
}
processaTexto(caminho);