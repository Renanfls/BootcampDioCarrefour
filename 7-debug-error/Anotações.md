# Tratamento de erros

## **Tipos de erros**
#
### **1. ECMAScript Error**

Erros que ocorrem em tempo de execução.

![Captura de Tela (536)](https://user-images.githubusercontent.com/78867248/168939434-17df5bde-4f85-4809-8c47-11fe0d2ddf80.png)

**Composto por:**
- Mensagem
- Nome
- Linha
- Call Stack (Pilha de chamadas)

### **2. DOMException**

Erros relacionados ao Document Object Model (DOM).

![Captura de Tela (538)](https://user-images.githubusercontent.com/78867248/168939572-ccfbc0c0-824a-4476-b37c-e32283f155bd.png)

## **Tratando erros**
#

### **Diferença entre "return" e "throw"**

`return`

Retorna um valor.

`throw`

Lança um erro.

![Captura de Tela (540)](https://user-images.githubusercontent.com/78867248/168939864-075d28ad-44c1-4fba-83b6-8a38e031cee2.png)

#
### **Implementação da declaração try/catch**

![Captura de Tela (549)](https://user-images.githubusercontent.com/78867248/168940663-97b3e549-d138-47ef-bb3f-4978d84c2c7f.png)

![Captura de Tela (545)](https://user-images.githubusercontent.com/78867248/168940511-d0802c3a-b02e-4fb0-a281-856315297ba4.png)

`try`

Verifica se o pedaço de código apresenta erro.

`cath`

Captura o erro permitindo a manipulação.

`finally`

![Captura de Tela (546)](https://user-images.githubusercontent.com/78867248/168940542-e1538d5b-abb9-4137-90f4-f65f17156803.png)

![Captura de Tela (552)](https://user-images.githubusercontent.com/78867248/168941131-8e6463c3-54d2-4dff-9680-347a5dc8624f.png)

Instrução que é chamada independente se tem um erro ou não.

#
### **Manipulando objeto Error**
#

![Captura de Tela (554)](https://user-images.githubusercontent.com/78867248/168941230-290d6234-60d8-4ddf-b067-a58578169eb2.png)

![Captura de Tela (556)](https://user-images.githubusercontent.com/78867248/168941313-28da1d7d-dc26-4dcc-87a5-773ecd075934.png)

![Captura de Tela (558)](https://user-images.githubusercontent.com/78867248/168941409-ca3c66fb-d2ba-4d8d-97b6-ed1ecc4d839c.png)

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

