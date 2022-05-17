# Tratamento de erros

## **Tipos de erros**
#
### **1. ECMAScript Error**

Erros que ocorrem em tempo de execução.

**Composto por:**
- Mensagem
- Nome
- Linha
- Call Stack (Pilha de chamadas)

### **2. DOMException**

Erros relacionados ao Document Object Model (DOM).


## **Tratando erros**
#

### **Diferença entre "throw" e "return"**

`throw`

Lança um erro.

`return`

Retorna um valor.

#
### **Implementação da declaração try/catch**

`try`

Verifica se o pedaço de código apresenta erro.

`cath`

Captura o erro permitindo a manipulação.

`finally`

Instrução que é chamada independente se tem um erro ou não.

#
### **Manipulando objeto Error**
#

`new Error(message, fileName, lineNumber)`

todos os parâmetros são opcionais

`fileName` e `lineNumber` não são padrões. 

Verificar a compatibilidade na documentação da W3Schools ou da Mozilla

## Atividade: validação de erros por tipo
#

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
    - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
    - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
    - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
    - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

