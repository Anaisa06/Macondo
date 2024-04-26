
function conversorBinario (binario){
    //Primero, separar el string en 8 bits
    const bytesList = binario.split("_") 

    //Convertir la string a número decimal
    const decimalList = bytesList.map (byte => {
        return parseInt(byte, 2)
    })       
    console.log(`Conversión a decimales: ${decimalList}`)

    //Conversión a caracter
    const charList = decimalList.map(decimal => {
        return String.fromCharCode(decimal)
    })    
    console.log(`Conversión a caracteres: ${charList}`)

    //Concatenación de los caracteres
    const charString = charList.join('')

    return charString
}

function macondoTraductor (string){
    //Definir expresión regular para encontrar las vocales
    const regEx = /[aeiouAEOIU]/g

    //Reemplazar por "i"
    const textoTrad = string.replace(regEx, "i")

    return textoTrad
}

function validarJugada (jugada){
    let flag = true
    while (flag){     
        switch (jugada){
            case "1": 
                jugada = "piedra";
                flag = false;
                break;
    
            case "2":
                jugada = "papel";
                flag = false;
                break;
    
            case "3":
                jugada = "tijera";
                flag = false;
                break;
                
            default:
               jugada = prompt("Esa no es una jugada válida, intenta de nuevo:\n1. Piedra\n2. Papel\n3. Tijera")             
        } 
    }
    return jugada
}

export  {validarJugada, conversorBinario, macondoTraductor}