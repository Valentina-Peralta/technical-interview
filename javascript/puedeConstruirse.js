/* 
const includes = (ramsomNote, magazine) => {
    const ramsomArray = ramsomNote.split('')
    const magazineArray = magazine.split('')
    console.log(ramsomArray, magazineArray)

    if (ramsomArray.includes(magazineArray)) {
        console.log(true)
    } else { console.log(false) }
}

includes('hola', 'ola') */

var puedeConstruirse = (desde, constuir) => {
    for (const caracter of desde) {
        console.log(caracter)
        constuir = constuir.replace(caracter, "")
        console.log(constuir)
    }

    if (!constuir)
        return true

    return false
}

console.log(puedeConstruirse("hlelrlsfsasadfooh", "hello"))