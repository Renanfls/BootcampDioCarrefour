const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray);

/*
Métodos
-------------------------------------------------- 
*/

const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5);

// Consultar
mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);