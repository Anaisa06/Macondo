//Viaje de Hildebrando a Macondo
const sueldo = 2500000;
let restante;
let vacation = (true);

//Caso 1: Comida
const almojabana = 15000;
const subway = 23000;
let flag = true;


while (vacation){
    while (flag){

        let comida = prompt("Hildebrando está en el aeropuerto El Dorado. Quiere comer algo porque su vuelo a Macondo tiene escala en Medellín en la madrugada. Las opciones son: almojábana con gaseosa por $15.000, o subway con gaseosa por $23.000. ¿Qué debería escoger?\n1. Almojábana con gaseosa\n2. Subway con gaseosa\n3. Ninguno");

        switch (comida){

            //Si escoge comer almojábana
            case "1":
                alert("Uy! Esa almojábana llevaba días en el mostrador, es posible que a Hildebrando de le dolor de panza");

                //Restar del sueldo
                restante = sueldo - almojabana;
                console.log(`El sueldo restante es de $${restante}`)
                flag = false;   
                break;     

            //Si escoge comer un subway
            case "2":
                alert("Buena elección, ahora Hildebrando está lleno y listo para continuar el viaje");   

                //Restar del sueldo
                restante = sueldo - subway;
                console.log(`El sueldo restante es de $${restante}`)
                flag = false;
                break;

            //Si no  escoge ninguna opción
            case "3":
                alert("Está bien, Hildebrando tendrá que comprar algo de comer cuando llegue a Medellín, o podría desmayarse del hambre en el avión")
                flag = false;
                break;
            
            //Si no escoge una opción válida
            default:
                alert("No es una opción válida, intenta de nuevo");
        }
    }

    //Caso 2: Maleta
    const altoMaleta = 60;
    const anchoMaleta = 20;
    const largoMaleta = 40;
    const altoPermitido = 55;
    const anchoPermitido = 20;
    const largoPermitido = 40;

    alert("Bien, ahora Hildebrando está a punto de abordar el avión, pero... La maleta que lleva no cumple con el tamaño máximo permitido, al parecer es 5 cm más alta. La mejor opción para Hildebrando es deshacerse de un par de prendas de la maleta para que cumpla con las características, así que vamos a calcular el factor de reducción mínimo para que pueda seguir con su viaje")

    //Calcular factor de reducción
    const factorReducciónAlto = (altoPermitido/altoMaleta).toFixed(2);
    console.log(`Factor de reducción alto: ${factorReducciónAlto}`);

    const factorReducciónAncho = (anchoPermitido/anchoMaleta).toFixed(2);
    console.log(`Factor de reducción ancho: ${factorReducciónAncho}`);

    const factorReducciónLargo = (largoPermitido/largoMaleta).toFixed(2);
    console.log(`Factor de reducción largo: ${factorReducciónLargo}`);

    //Encontrar el valor mínimo
    const factorMinimo = Math.min(factorReducciónAlto, factorReducciónAncho, factorReducciónLargo);
    console.log(`Factor de reducción mínimo: ${factorMinimo}`);

    //Encontrar las nuevas dimensiones de la maleta
    const nuevoAlto = (altoMaleta * factorMinimo).toFixed(2);
    const nuevoAncho = (anchoMaleta * factorMinimo).toFixed(2);
    const nuevoLargo = (largoMaleta * factorMinimo).toFixed(2);

    alert(`El factor de reducción mínimo es de ${factorMinimo}. Las nuevas dimensiones de la maleta son: ${nuevoAlto} cm de alto, ${nuevoAncho} cm de ancho, y ${nuevoLargo} cm de largo. Ahora Hildebrando puede continuar con la embarcación en el avión.`)

    //Caso 3: Wifi en el aeropuerto

    const password = "01110010_01101001_01110111_01101001"

    alert("Ahora Hildebrando está en la ciudad de Medellín, son las 2 am y debe abordar el siguiente avión a las 3 am con dirección a Macondo. Necesita asegurar su reserva para el día siguiente, pero la única red de wifi que encontró se llama 'ElPassEs: 01110010_01101001_01110111_01101001'. Al parecer la contraseña está cifrada en código binario, pero no pasa nada porque Hildebrando tiene un as bajo la manga: un programa que le ayudará a convertir este código a decimales, y luego a caracteres")

    //Primero, separar el string en 8 bits
    const bytesList = password.split("_")
    console.log(bytesList)

    //Convertir la string a número decimal
    const decimalList = bytesList.map (byte => {
        return parseInt(byte, 2)
    })
    alert(`Conversión a decimales: ${decimalList}`)    
    console.log(`Conversión a decimales: ${decimalList}`)

    //Conversión a caracter
    const charList = decimalList.map(decimal => {
        return String.fromCharCode(decimal)
    })
    alert(`Conversión a caracteres: ${charList}`)
    console.log(`Conversión a caracteres: ${charList}`)

    //Concatenación de los caracteres
    const realPassword = charList.join('')
    alert(`¡El programa ha funcionado de maravilla! Tenemos la contraseña del wifi: ${realPassword}. Ahora Hidelbrando podrá asegurar la reserva de su hotel en Macondo`)
    console.log(`Contraseña: ${realPassword}`)

    //Caso 4: Problemas de lenguaje
    const mensaje = "Taxi, me puede llevar la hotel mariposas amarillas, por favor"

    //Definir expresión regular para encontrar las vocales
    const regEx = /[aeiouAEOIU]/g

    //Pedir un texto para probar el traductor
    const userText = prompt("¡Hildebrando ha llegado a Macondo! Pero hay un problema, aquí solo hablan con la vocal i. No hay problema, Hildebrando tiene todo controlado y tiene un programa para traducir el texto. Ingresa un saludo para Macondo y verás como se traduce")

    //Reemplazar las vocales por la letra i y mostrar resultado
    const userTextTrad = userText.replace(regEx, "i")
    console.log(`La traducción de tu texto "${userText}" es "${userTextTrad}"`)
    alert(`La traducción de tu texto "${userText}" es "${userTextTrad}"`)

    //Pedir taxi
    alert(`Muy bien, ahora que sabemos que el traductor funciona, Hildebrando debe pedir un taxi para llegar al hotel. Vamos a traducir el mensaje "${mensaje}" para que se la pueda decir al conductor`)
    const mensajeTrad = mensaje.replace(regEx, "i")
    console.log(`La traducción de tu mensaje "${mensaje}" es "${mensajeTrad}"`)
    alert(`La traducción de tu mensaje "${mensaje}" es "${mensajeTrad}"`)

    //Terminar programa
    alert("Vacaciones finalizadas")
    vacation = false;
}