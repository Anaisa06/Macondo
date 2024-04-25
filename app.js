//Viaje de Hildebrando a Macondo

//Funciones
import { conversorBinario, macondoTraductor, validarJugada } from "./functions.js";

//Variables
const sueldo = 2500000;
let restante;
let vacation = true;

//Caso 1: Comida
const almojabana = 15000;
const subway = 23000;
let flag = true;

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
            restante = sueldo
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
const nuevoAlto = (altoMaleta * factorMinimo).toFixed(0);
const nuevoAncho = (anchoMaleta * factorMinimo).toFixed(0);
const nuevoLargo = (largoMaleta * factorMinimo).toFixed(0);

alert(`El factor de reducción mínimo es de ${factorMinimo}. Las nuevas dimensiones de la maleta son: ${nuevoAlto} cm de alto, ${nuevoAncho} cm de ancho, y ${nuevoLargo} cm de largo. Ahora Hildebrando puede continuar con la embarcación en el avión.`)


//Caso 3: Wifi en el aeropuerto

const password = "01110010_01101001_01110111_01101001"
const wifiPrecio = 50000

alert("Ahora Hildebrando está en la ciudad de Medellín, son las 2 am y debe abordar el siguiente avión a las 3 am con dirección a Macondo. Necesita asegurar su reserva para el día siguiente, pero la única red de wifi que encontró se llama 'ElPassEs: 01110010_01101001_01110111_01101001'. Al parecer la contraseña está cifrada en código binario, pero no pasa nada porque Hildebrando tiene un as bajo la manga: un programa que le ayudará a convertir este código a decimales, y luego a caracteres")

const realPassword = conversorBinario(password)

restante = restante - wifiPrecio
alert(`¡El programa ha funcionado de maravilla! Tenemos la contraseña del wifi: ${realPassword}. Ahora Hidelbrando podrá asegurar la reserva de su hotel en Macondo. Aunque el wifi tiene un costo de $50.000 por hora así que el nuevo dinero disponible es de $${restante}`)
console.log(`Contraseña: ${realPassword}`)


//Caso 4: Problemas de lenguaje
const mensaje = "Taxi, me puede llevar la hotel mariposas amarillas, por favor"

//Pedir un texto para probar el traductor
const userText = prompt("¡Hildebrando ha llegado a Macondo! Pero hay un problema, aquí solo hablan con la vocal i. No hay problema, Hildebrando tiene todo controlado y tiene un programa para traducir el texto. Ingresa un saludo para Macondo y verás como se traduce")

//Reemplazar las vocales por la letra i y mostrar resultado

const userTextTrad = macondoTraductor(userText)
console.log(`La traducción de tu texto "${userText}" es "${userTextTrad}"`)
alert(`La traducción de tu texto "${userText}" es "${userTextTrad}"`)

//Pedir taxi
alert(`Muy bien, ahora que sabemos que el traductor funciona, Hildebrando debe pedir un taxi para llegar al hotel. Vamos a traducir el mensaje "${mensaje}" para que se la pueda decir al conductor`)
const mensajeTrad = macondoTraductor(mensaje)

console.log(`La traducción del mensaje "${mensaje}" es "${mensajeTrad}"`)
alert(`La traducción del mensaje "${mensaje}" es "${mensajeTrad}"`)


//Caso 5: piedra, papel o tijera
const taxiFare = 300000
const jugadas = ["piedra", "papel", "tijera"]

//Preguntar jugada y verificar que sea válida
let jugadaUser = validarJugada(prompt("Hildebrando ha llegado al hotel Mariposas Amarillas, pero se lleva una gran sorpresa porque el taxista le dice que su cobro son $300.000. Él piensa que es demasiado, así que trata de negociar con el taxista; llegan al acuerdo de que si Hildebrando le gana en una ronda de piedra, papel, o tijera, no deberá pagar nada. ¿Que crees que debería sacar para ganarle al taxista?\n1. Piedra\n2. Papel\n3. Tijera"))

//Generar jugada random del taxista. Math random para generar un índice random de la lista
const jugadaTaxi = jugadas[Math.floor(Math.random() * 3)]

console.log(`La jugada de Hildebrando fue ${jugadaUser} y la jugada del taxista fue ${jugadaTaxi}`)
alert(`La jugada de Hildebrando fue ${jugadaUser} y la jugada del taxista fue ${jugadaTaxi}`)

//Verificar si Hildebrando gana o pierde
if (jugadaTaxi === jugadaUser){
    alert(`Bueno, no era lo que esperaba, pero Hildebrando ha empatado y ha logrado huir del taxista. Sigue con un dinero disponible de ${restante}`)
} else if ((((jugadaUser === "piedra") && (jugadaTaxi === "papel"))) || (((jugadaUser === "papel") && (jugadaTaxi === "piedra"))) || (((jugadaUser === "tijera") && (jugadaTaxi === "papel")))){
    alert(`Bien! Has ayudado a Hildebrando a ganar, eso significa que no tendrá que pagar el taxi. Sigue con un dinero disponible de ${restante}`)
} else {
    restante = restante - taxiFare
    alert(`Oh no! Has hecho que Hildebrando pierda, esto va a salir caro. Tiene que pagarle $300.000 al taxi, su nuevo dinero disponible es de $${restante}`)
}
    

//Caso 6: Actividades en el hotel

let regresoMurio = "Regresó"
let contadorDias = 0
alert("Ahora Hildebrando está en el hotel. Se ha dado cuenta de algo muy particular... al parecer cada actividad tiene un patrón de vestimenta! Las personas se visten de amarillo, verde, azul o rojo. ")

while (contadorDias < 4 && vacation === true){

    //Preguntar color de ropa
    let colorSelec = prompt("¿Qué color crees que debería vestir Hildebrando el día de hoy?\n1. Amarillo\n2. Verde\n3. Rojo\n4. Azul")

    switch(colorSelec){
        //Si escoge vestir de amarillo
        case "1":
            colorSelec = "amarillo"               
            
            contadorDias++
            let piscina = confirm("Has escogido el color amarillo! Eso significa que Hildebrando irá a la piscina. Pero espera... la piscina huele un poco raro. Debería Hildebrando entrar a la piscina? Presiona 'ok' para que entre y 'cancel' para evitarlo")

            //Si decide entrar a la piscina
            if (piscina){
                alert("Ay... no. La piscina tenía exceso de cloro, Hildebrando se ha intoxicado y ha muerto! Las vacaciones se han terminado")
                regresoMurio = "murió"
                vacation = false                
                
            //Si decide no entrar a la piscina
            } else {
                alert("Has evitado que Hildebrando entre a la piscina... menos mal, porque él acaba de ver que alguien más entró pero nunca salió")
            }
            break
        
        //Si escoge vestir de verde
        case "2":                

            contadorDias++
            let caminata = confirm("Has escogido el color verde! Eso significa que Hildebrando ira a una caminata guiada, aunque es un poco larga. Debería Hildebrando ir hasta el final de la caminata? Presiona 'ok' para que vaya hasta el final, o 'cancel' para que se devuelva")

            //Si decide ir hasta el final
            if (caminata) {
                alert("Hildebrando ha ido hasta el final de la caminata, y se ha encontrado con una maravillosa cascada! Se toma muchas fotos y vuelve feliz al hotel")

            //Si decide devolverse    
            } else {
                alert("Hildebrando se ha cansado y se ha devuelto a mitad de camino. El problema es que no conocía la ruta y se ha perdido en la noche... no sabemos nada más de él, así que las vacaciones han terminado")
                regresoMurio = "no sabemos"
                vacation = false
            }
            break

        //Si escoge vestir rojo
        case "3":
            colorSelec = "rojo"
            flag = true
            
            contadorDias++
            while(flag){
                let playa = prompt("Has escogido el color rojo! Eso significa que Hildebrando irá a la playa y allí hay varias actividades para hacer. Ayuda a Hildebrando a escoger:\n1. Jugar voleibol\n2.Nadar en el mar\n3.Tomar cocteles y descansar")

                switch(playa){

                    //Decide jugar voleibol
                    case "1":
                        alert("Has escogido jugar voleibol! Hildebrando ha encontrado un maravilloso grupo para jugar y se ha divertido mucho")
                        flag = false
                        break

                    //Decide nadar en el mar
                    case "2":
                        restante = restante - 100000                    
                        alert(`Has escogido nadar en el mar! El mar estaba tranquilo, Hildebrando se la pasa de maravilla y hasta decide rentar una moto acuática. Esta actividad le costó $100.000. Su dinero disponible ahora es $${restante}`)
                        flag = false
                        break
                        
                    //Decide tomar cocteles    
                    case "3":
                        restante = restante - 70000
                        alert(`Has escogido tomar cocteles y descansar. El coctel estaba un poco costoso, valía $70.000, así que el nuevo dinero disponible es de ${restante}... Oh no! Al parecer el coctel estaba hecho con chirrinchi adulterado, Hildebrando se siente muy mal y debe correr al hospital, las vacaciones han finalizado`)
                        flag = false 
                        vacation = false
                        break

                    default:
                        alert("No es una opción válida, intenta de nuevo")    
                }                                      
            }
        //Si escoge vestir azul
        case "4":
            flag = true

            contadorDias++
            while (flag){    
                let actividadHotel = prompt("Has escogido vestir de azul! Eso significa que Hildebrando se quedará en el hotel y puede escoger entre varias actividades para realizar allí. Ayúdalo a tomar una decisión:\n1. Bingo\n2. Bailar\n3. Ir al casino\n")

                switch (actividadHotel){
                    //Si escoge jugar bingo
                    case "1":
                        restante = restante + 50000
                        alert(`Has escogido jugar al Bingo! Al parecer Hildebrando está de buenas y gana esta ronda. El premio son $50000 así que su nuevo dinero disponible es de $${restante}`)
                        flag = false
                        break

                    //Si escoge bailar
                    case "2":
                        alert("Has escogido ir a bailar! Hildebrando encuentra una excelente bailarina y se la pasa de maravilla")
                        flag = false
                        break

                    //Si escoge ir al casino
                    case "3":
                        restante = 200000
                        alert("Has escogido ir al casino! Hildebrando es el mejor apostando, pero el peor ganando... ha perdido todo y solo ha quedado con el dinero para devolverse. Las vacaciones han terminado")
                        flag = false
                        vacation = false
                        break

                    //Dato no válido
                    default:
                        alert("No es una opción válida, intenta de nuevo")
                }
            }
    }        
}

//Terminar programa

const gastos = sueldo - restante

alert("Vacaciones finalizadas")
console.log(`Balance general:\nDías en Macondo: ${contadorDias}\nDinero gastado: ${gastos}\nRegresó o murió: ${regresoMurio}`)
alert(`Balance general:\nDías en Macondo: ${contadorDias}\nDinero gastado: ${gastos}\nRegresó o murió: ${regresoMurio}`)
