new Error(message, fileName, lineNumber)

// todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida');
// Dando nome ao erro
MeuErro.name = 'InvalidMessage';

throw MeuErro;