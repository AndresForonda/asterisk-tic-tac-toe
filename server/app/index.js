// Validar La existencia de dos usuarios en el canal
module.exports.getChannelCount = async (ari) => {
  const channels = await ari.channels.list();
  return channels.length === 2;
};

let count = 0;

//Ingresa usuario 1, se lee el nombre y se almacena en una constante

//Ingresa el otro usuario y se hace lo anterior otra vez.

//Si hay dos usuarios en el canal inicia la aplicación

//Definir vectores para almacenar los digitos ingresados por los usuarios enc ada turno
//Definir bandera para iterar turnos
//Definir combinaciones posibles para ganar y terminar el juego

//Triki: Mientras No se cumpla alguna de las combinaciones posibles o no este completo el tablero se ejecuta el bloque

//Si la bandera es True ejecuta un bloque de código y le asigna un logo al usuario (x)

//Espera que el usuario ingrese un digito

//Si el digito no ha sido ingresado antes por ningún usuario entonces se captura y almacena en un vector
//y se ejecuta el proceso de pintar la posición en la interfaz gráfica

//Se cambia el estado de la bandera

//Si la badnera es False ejecuta otro bloque, lo anterior pero para el otro usuario

//...

//...

//...

//Si el vector del usuario 1 o el vector del usuario 2 contiene todos los elementos de alguna de las dos combinaciones
//posibles entonces se saldra del while y se acab el juego

//Si la unión de ambos vectores contienen la totalidad de digitos entonces acaba el juego

//Despedida

module.exports.stasisStart = (event, channel) => {
  count += 1;
  // Register the on press key event
  channel.on("ChannelDtmfReceived", async (e, channel) => {
    console.log("count", count);
  });
};

module.exports.stasisEnd = () => {
  count -= 1;
  console.log(count);
};
