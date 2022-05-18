function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    // Verifica se o pedaço de código apresenta erro
    try {
        verificaPalindromo(string);
    }
    // Captura o erro permitindo a manipulação
    catch(e) {
        console.log(e);
        // throw e;
    }
    // É chamada independente se tem um erro ou não.
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');