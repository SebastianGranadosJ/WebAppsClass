// Cuando se crea una promesa se crea un hilo donde se va ejecutar las lienas agregadas a la promesa
// Esto permite seguir ejecutando la aplicacion mientras se realiza un subproceso
// se leen en la tercera lectura de JavaScript
// Sirve para peticiones del cliente al servidor


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(false) {
      reject('Promise 1 rejected');    // Son como returns, Cuando no he recibido la respuesta, es un retorno de una excepcion
    }    
    resolve('Promise 1 resolved');  // Cuando recibir ya la respuesta

  }, 300)
});
// El proceso termina cuando termina el ultimo de todos los hilos, los hilos es la manera en que se divide un solo proceso dandole espacios
// de memoria, un proceso asi puede tener subtareas

console.log(promise1); // Lo invoca pero no espera entonces da pending

// Se queda escuchando, si se resuelve con el resolve va al then, si con el reject va al catch
// La info del then no se puede sacar de ahi, no me puede dar referencias de nada
// No es bloqueante
promise1.then(value => {
  console.log(value);
}).catch(error => {
  console.log(error);
});

const w = async () => await promise1 // Es bloqueante, W tiene que esperar la promesa
console.log(w()); // no espera a W
console.log(await w()); // el await es para esperar w()
