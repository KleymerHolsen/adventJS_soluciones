/*
    RETO #01:
    
    Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
    Haz una función que devuelva una lista con todas las ovejas que sean de color
    rojo y que además su nombre contenga tanto las letras "n" y "a", sin importar 
    el orden, las mayúsculas o espacios.
*/

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
];

function contarOvejas(ovejas) {
    const OVEJAS = ovejas;
    const RESULTADO = OVEJAS.filter(({ name, color }) => {
        const NAME = name.toLowerCase();
        return NAME.includes('n') && NAME.includes('a') && color === "rojo";
    });
    return RESULTADO;
}

const MOSTRAR_RESULTADO = contarOvejas(ovejas);
console.log(MOSTRAR_RESULTADO);