# Método Map

## **O que é**

![Captura de Tela (566)](https://user-images.githubusercontent.com/78867248/169205516-fd87b750-8a9f-4d69-9ba9-5e71d61fe1f3.png)

## **Sintaxe**

![Captura de Tela (568)](https://user-images.githubusercontent.com/78867248/169205536-a2923d03-bc4c-4155-bae0-0ec82452a6ad.png)

Não é necessário usar todos os parâmetros do callback

## **Map vs forEach**

![Captura de Tela (570)](https://user-images.githubusercontent.com/78867248/169205554-98d85fae-d66b-4a94-8d35-0e2e00dae074.png)

# Método Filter

## **O que é**

- Cria um novo array
- Não modifica o array original

## **Sintaxe**

![Captura de Tela (572)](https://user-images.githubusercontent.com/78867248/169205572-2c9f93c7-33fe-4fe7-a9c6-34ce660a55b3.png)

**Exemplo**

![Captura de Tela (574)](https://user-images.githubusercontent.com/78867248/169205584-f81d760c-01a6-4652-8b57-0f363bc3ae6c.png)

# Método Reduce

## **O que é**

Não retorna um novo array

- Executa uma função em todos os elementos do array, retornando um valor único

## **Sintaxe**

![Captura de Tela (576)](https://user-images.githubusercontent.com/78867248/169205601-899112d4-7d21-4a88-a177-3b927e2fb4e3.png)

**Exemplo**

![Captura de Tela (578)](https://user-images.githubusercontent.com/78867248/169205611-df6601b6-833c-43fa-8186-0bfa1840ab16.png)

`accumulador` - acumulador de todas as chamadas de callcackFn

`currentValue` - elemento atual sendo acessado pela função

`index` - se refere ao currentValue

`array`- resultante do Reduce

## **Atividades**

### Map

- Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

### Filter

- Filtre e retorne todos os números pares de um array.

### Reduce

1. Some todos os números de um array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
