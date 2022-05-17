/* Atividade 1: Maps */

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('José', 'Admin');
usuarios.set('Roberto', 'Admin');
usuarios.set('Renata', 'User');
usuarios.set('Maria', 'Admin');

console.log(getAdmins(usuarios));


/* Atividade 2: Sets 

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));

*/