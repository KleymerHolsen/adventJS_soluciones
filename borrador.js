/*
    +-----------------------------------------------------------------------
    | En este archivo borrador es donde se va a encontrar el procedimiento
    | de como llegue a la solución de los retos y que extrategia/habilidades
    | he utilizado.
    +-----------------------------------------------------------------------
*/


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
// console.log(ovejas)

for (let i = 0; i < ovejas.length; i++) {
    const NAME = ovejas[i].name.toLowerCase();
    console.log(NAME.includes('n') && NAME.includes('a'));



    // console.log(NAME);

    // console.log(ovejas[i].name.includes('a') || ovejas[i].name.includes('n'));
}


/*


function contarOvejas(objOvejas) {
    const ovejas = objOvejas;
    const resultado = ovejas.filter(({ name }) => {
        return Boolean(name.includes('n'));
       
        // return color === "rojo" && name.includes('e') ;
    });
    return resultado;
}

const nuevaListaOvejas = contarOvejas(ovejas);
console.log(nuevaListaOvejas);
*/