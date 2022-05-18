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


## **APIs (Application Programming Interface)**

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acessá-la por meio de URLs.

**JSON:** JavaScript Object Notation

É muito comum que APIs retornem seus dados no formato `.json`, portanto precisamos tratar esses dados quando os recebemos.

## **Método fetch**

Consumindo APIs

![fetch](https://user-images.githubusercontent.com/78867248/168930522-6c113273-454b-43b3-8f2e-d141690e4795.png)

Operações no banco (POST, GET, PUT, DELETE, etc)

![Operações no banco](https://user-images.githubusercontent.com/78867248/168930538-081e59f2-b15e-4626-ae91-7b7e504d69d9.png)

## **Atividade: API "catAPI"**

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

1. Utilize a API `https://thatcopy.pw/catapi/rest` para fazer as chamadas com o método `fetch()`;
2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
