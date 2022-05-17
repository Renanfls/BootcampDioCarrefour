/*

    Diferença entre "throw" e "return"

// Apresenta Apenas uma string
function verificaPalindromo(string) {
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('');
*/

// Trata com sendo um erro
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('');
