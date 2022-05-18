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

### **Classes**

Classes no Javascript não existem nativamente, são definidadas como **açúcar sintático(Syntatic sugar):** uma sintaxe feita para facilitar a escrita.

Todas as classes são objetos e a herança se dá por protótipos.
