# Assincronicidade

### **Definição**

**Assíncrono**

"Que não ocorre ou não se efetiva ao mesmo tempo."

O Javascript roda de maneira **síncrona.**

## **Promises**
#

Objeto de processamento assíncrono

Inicialmente, seu valor é desconhecido. Ela pode, então, ser **resolvida** ou **rejeitada.**

Uma promise pode ter 3 estados

**1)** Pending(Pendente) 
**2)** Fulfilled(Completado)
**3)** Rejected(Rejeitado)

### **Estrutura**

![estrutura](https://user-images.githubusercontent.com/78867248/168916552-cc1e9504-2cce-4e20-a1a2-98c0eec05827.png)

### **Manipulação**

![manipulacao](https://user-images.githubusercontent.com/78867248/168916563-bb5f05e6-ce22-467e-a7dc-d14701fe49a7.png)

## **Async/await**
#

Funções assíncronas precisam dessas duas palavras chave.

![Async-await](https://user-images.githubusercontent.com/78867248/168916597-92ff230c-f9ca-4f4c-bafe-44074222a2a3.png)

`async function`

Define que uma function é assíncrona.

Quando você vai resolver uma promise, você precisa disser que essa função vai ser assíncrona pra que você utilizar o `await`.

`await`

Para o seu código até que a promise seja resolvida e depois que resolvida o código continua rodando.

**Utilizando try...catch**

![async-await-utilizando-try catch](https://user-images.githubusercontent.com/78867248/168916621-5ec3b090-7617-40be-8841-f1ea22c3db94.png)
