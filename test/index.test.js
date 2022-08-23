const pegaArquivo = require('../index');
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('função pegaArquivo::', () => {
    it ('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/home/lucaspc/projeto/test/arquivo/texto.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/home/lucaspc/projeto/test/arquivo/texto-semLink.md')
        expect(resultado).toEqual('Não há links');
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos')).rejects.toThrow("Não foi possível abrir o arquivo!")
      })
      it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('/home/lucaspc/projeto/test/arquivo/texto.md')).resolves.toEqual(arrayResult)
      })
})

