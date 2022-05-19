# DOM

## **O que é**

Document Object Model

![Captura de Tela (580)](https://user-images.githubusercontent.com/78867248/169235672-f262b78c-e382-41e6-a720-bf239b979273.png)

O DOM HTML é um padrão de como **acessar e modificar os elementos HTML de uma página.**

## **DOM vs BOM**

**BOM:** Browser Object Model

![Captura de Tela (581)](https://user-images.githubusercontent.com/78867248/169235693-3939f49d-2953-4b71-a1f1-c26179adc154.png)

Tudo o que está dentro do objeto window.

## **Métodos**

Selecionando os elementos de uma página

`document.getElementById('titulo');`

`document.getElementsByTagName('li');`

`document.getElementsByClassName('textos');`

`document.querySelectorAll('.primeira-classe .segunda-classe');`

Ambos os métodos retornam um array

## **Adicionar e deletar**

![Captura de Tela (583)](https://user-images.githubusercontent.com/78867248/169235719-029b9b88-5467-47f1-aa59-b1d088a512eb.png)

## **Trabalhando com estilos**

### Classes

`.classList()`

![Captura de Tela (585)](https://user-images.githubusercontent.com/78867248/169235736-a4e6565f-b0de-485f-a052-9d094abbd9cb.png)

### CSS

Acessando diretamente o CSS de um elemento

![Captura de Tela (587)](https://user-images.githubusercontent.com/78867248/169235761-5af85b59-a343-4fd9-8f83-10958308ab7d.png)

![Captura de Tela (589)](https://user-images.githubusercontent.com/78867248/169235929-2e2939ab-5fc6-4dd8-9de7-c8055ebe6bf9.png)

## **Eventos**

### Tipos

**Eventos do mouse:**

`mouseover`

`mouseout`

**Eventos de clique**

`click`

`dbclick` - *cliques duplos*

**Eventos de atualização**

`Change`

`load`

## **Acionando eventos**

`.addEventListener()`

Diretamente no javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

### Atributo HTML

Especifica a função a ser chamada diretamente no elemento HTML.

![Captura de Tela (591)](https://user-images.githubusercontent.com/78867248/169235955-b55eb60f-e4cd-40ae-a868-ce0ca4de04d8.png)
