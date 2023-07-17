/* Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
*/

const removeDuplicateLetters = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result += str[i];
        }
    }
    return result;
};

const uno = (array) => {
    const filteredArray = array.map((str) => removeDuplicateLetters(str));
    return filteredArray.sort((a, b) => b.length - a.length);
};

const array = ['ab', 'abb', 'abbabbabbaa'];
console.log(uno(array));


