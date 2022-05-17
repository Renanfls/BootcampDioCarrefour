# Coleção Chaveada Map

## Estrutura

![estrutura-map](https://user-images.githubusercontent.com/78867248/168704450-31132ea0-02d8-46de-a190-7af069f903f6.png)

### Características:
- Uma coleção de arrays no formato [chave, valor];
- Pode iterado por um loop for...of

## Métodos
Adicionar, ler e deletar

![metodos-map](https://user-images.githubusercontent.com/78867248/168704464-ca17570a-112a-4e6d-87a9-d2ae0267019f.png)

## Map vs Objeto
- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.


# Coleção Chaveada Set

## Estrutura

![estrutura-set](https://user-images.githubusercontent.com/78867248/168706110-05edfaee-56d2-4e80-8184-2482a552f9d0.png)

Sets são estruturas que armazenam apenas **valores únicos.**

## Métodos
Adicionar, consultar e deletar

![metodos-set](https://user-images.githubusercontent.com/78867248/168706119-5cadb978-a5ea-4d52-945f-60260cfea5fd.png)

## Set vs Array
- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.

## **Atividade 1: Maps**
#

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.

## **Atividade 2: Sets**
#

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.