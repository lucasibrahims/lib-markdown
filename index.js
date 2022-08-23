const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto)    
{
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayDeResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null)
    {
        arrayDeResultados.push({ [temp[1]]: temp[2] });
    }
    if (arrayDeResultados.length === 0)  
    {
        const naoHaLinks = 'Não há links'
        return naoHaLinks;
    }
    else
    {
        return arrayDeResultados; 
    }
}
function tratandoErro(erro)
{
    throw new Error(chalk.red(erro.code, 'Não foi possível abrir o arquivo!'));
}

async function pegaArquivo(caminhoDoArquivo)
{   
    const encolding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encolding);
        return extraiLinks(texto);
    }
    catch(erro){
        tratandoErro(erro);
    }

}
module.exports = pegaArquivo;
