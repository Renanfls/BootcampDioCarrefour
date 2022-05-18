# Orientação a Objetos

## Conceito

É um paradigma aplicado na programação que consiste na interação entre diversas unidades chamadas de **objetos.**

## Paradigmas

### **Tipos:**
- Imperative (Foca em como você vai resolver os problemas)
    - Procedural
    - Object Oriented
    - Parallel Processing

- Declarative (Foca no que você vai fazer para resolver esses problemas)
    - Logic
    - Functional

        Ex.: Banco de Dados SQL ou declaração funcional onde você declara as coisas e elas acontecem
    - Dataflow
    - Database

Os programas são "objetos" que possuem uma série de propriedades.

### **Pilares:**
- Abstração
- Herança
- Encapsulamento
- Polimorfismo

**Abstração**

"Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo."

Tornar um problema cada vez mais simples.

**Herança**

O objeto filho herda propriedades e métodos do objeto pai.

**Encapsulamento**

Cada classe tem propriedades e métodos independentes do restante do código.

**Polimorfismo**

Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando chamamos seus métodos.

## OOJS (Object Oriented JavaScript)

### **Protótipos**

É o esqueleto de todos os objetos.

Todos os objetos Javascript herdam propriedades e métodos de um prototype.

O `Object.prototype` está no topo desta cadeia.

![Captura de Tela (531)](https://user-images.githubusercontent.com/78867248/168934095-941907d1-bee8-4286-a660-45add1df251e.png)

### **Classes**

Classes no Javascript não existem nativamente, são definidadas como **açúcar sintático(Syntatic sugar):** uma sintaxe feita para facilitar a escrita.

![Captura de Tela (529)](https://user-images.githubusercontent.com/78867248/168934131-7bd5ea07-5d15-483e-9912-651e2f89fd0a.png)

Todas as classes são objetos e a herança se dá por protótipos.

![Captura de Tela (530)](https://user-images.githubusercontent.com/78867248/168934155-0f47f16c-b8b5-4a90-84d9-42c26ad232a8.png)

## Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
4. Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
8. Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais.**