import { clear } from "console";
import { create } from "domain";
import readline from "readline/promises";

const prompt = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(message); // SE QUEDA ESPERANDO

  rl.close();
  return answer;
};

let board = createBoard(9,9);
let gameFinished = false;


init()




async function init(){
  gameFinished = false;

  while(!gameFinished){
    console.log("-------- TIKTAKTOE 9X9 DE JAVASCRIPT CABRON 🔥🔥🔥------s--")
    console.log("Escoja una opcion: ")
    console.log("1. Jugar 🚬")
    console.log("2. Cerrar 💤")

    let choice = await prompt("Ingrese el numero que desea escoger: ")
    
    switch (choice){

      case '1':
        console.clear();
        await startGame()
        break;

      case '2':
        console.log("Espero volver a verte 😔😔😔 ");
        gameFinished = true;
        break;

      default:
      console.clear();
       console.log("Ingresa un valor valido.")

    }
  }

}

async function startGame() {
  let board = createBoard(9, 9);
  let jugador1 = '❌';
  let jugador2 = '🔵';
  let turno = 1;

  while (!gameFinished) {
    console.clear()
    imprimirTablero(board);
    console.log(`\nTurno del Jugador ${turno === 1 ? '1 (❌)' : '2 (🔵)'}`);

    let fueAgregado = false;

    
    while (!fueAgregado) {
      let fila = await prompt('Ingresa la fila: ');
      let columna = await prompt('Ingresa la columna: ');

      fila = parseInt(fila);
      columna = parseInt(columna);

      let simbolo = turno === 1 ? jugador1 : jugador2;

      fueAgregado = addToBoard(board, fila, columna, simbolo);
    }
    if (verificarTresEnRaya(board, simbolo)) {
        console.clear()
        imprimirTablero(board);
        console.log(`🎉 ¡El jugador ${turno ===     1 ? '1 (❌)' : '2 (🔵)'} ha ganado, TA CABRON!`);
        gameFinished = true;
    }

    turno = turno === 1 ? 2 : 1;

   
  }
}

function verifyTikTakToe(tablero, simbolo) {
  const filas = tablero.length;
  const columnas = tablero[0].length;

  for (let i = 0; i < filas; i++) {

    for (let j = 0; j < columnas; j++) {

      // Solo buscamos desde celdas que contengan el símbolo
      if (tablero[i][j] !== simbolo) continue;

      //(→)
      if (j <= columnas - 3 &&
          tablero[i][j + 1] === simbolo &&
          tablero[i][j + 2] === simbolo) {
        return true;
      }

      // (↓)
      if (i <= filas - 3 &&
          tablero[i + 1][j] === simbolo &&
          tablero[i + 2][j] === simbolo) {
        return true;
      }

      //  (↘)
      if (i <= filas - 3 && j <= columnas - 3 &&
          tablero[i + 1][j + 1] === simbolo &&
          tablero[i + 2][j + 2] === simbolo) {
        return true;
      }

      // (↗)
      if (i >= 2 && j <= columnas - 3 &&
          tablero[i - 1][j + 1] === simbolo &&
          tablero[i - 2][j + 2] === simbolo) {
        return true;
      }
    }
  }

  return false;
}



function addToBoard(matriz, fila, columna, caracter) {
  if (
    fila >= 0 && fila < matriz.length &&
    columna >= 0 && columna < matriz[0].length
  ) {
    if (matriz[fila][columna] === '⬜') {
      matriz[fila][columna] = caracter;
      return true;
    } else {
      console.log(`La celda [${fila}, ${columna}] ya tiene un valor.`);
      return false;
    }
  } else {
    console.log(`Coordenadas fuera del rango del tablero.`);
    return false;
  }
}



function createBoard(ancho, alto) {
  let board = [];

  for (let i = 0; i < alto; i++) {
    let fila = [];
    for (let j = 0; j < ancho; j++) {
      fila.push('⬜');
    }
    board.push(fila);
  }

  return board;
}

function imprimirTablero(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  let encabezado = '   ';
  for (let j = 0; j < columnas; j++) {
    encabezado += `  ${j}  `;
  }
  console.log(encabezado);

  
  for (let i = 0; i < filas; i++) {
    let filaStr = `${i} |`;
    for (let j = 0; j < columnas; j++) {
      const celda = matriz[i][j];
      filaStr += ` ${celda} |`;
    }
    console.log(filaStr);
  }
}


