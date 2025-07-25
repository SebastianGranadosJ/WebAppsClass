import { clear } from "console";
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



const direction = Object.freeze({
  VERTICAL: 'VERTICAL',
  HORIZONTAL: 'HORIZONTAL'
});

class Word {
    constructor(word, x, y,direction,number, description){
        this.word = word
        this.x = x
        this.y = y
        this.direction = direction
        this.description = description
        this.number = number
    }
}



const crosswordBlank = [
  ["1._", "_", "_", "_", "_", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["_", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "9._", "", "", "", "", ""],
  ["_", "", "", "", "", "3._", "_", "_", "_", "_", "", "", "", "", "", "", "", "", "_", "", "", "", "", ""],
  ["_", "", "", "2._", "", "_", "", "", "", "", "", "", "", "", "", "", "", "", "_", "", "", "", "", ""],
  ["_", "", "", "_", "", "_", "", "", "", "", "5._", "", "", "", "", "", "", "", "_", "", "", "", "", ""],
  ["2._", "_", "_", "_", "_", "_", "_", "_", "4._", "", "_", "", "6._", "", "8._", "", "", "", "_", "", "", "", "", ""],
  ["_", "", "", "_", "", "_", "", "", "4._", "_", "_", "_", "_", "7._", "_", "_", "", "", "_", "", "", "", "", ""],
  ["_", "", "", "", "", "", "", "", "_", "", "_", "", "_", "_", "_", "", "", "", "_", "", "", "", "10._", ""],
  ["", "", "", "", "10._", "_", "_", "_", "_", "", "_", "", "", "5._", "_", "_", "_", "_", "_", "_", "_", "_", "_",""],
  ["", "", "", "", "", "", "", "", "_", "", "_", "", "", "_", "_", "", "", "", "", "", "", "", "_",""],
  ["", "", "", "", "9._", "_", "_", "_", "_", "", "_", "", "", "_", "_", "", "", "", "", "", "", "", "_",""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "6._", "_", "_", "_", "", "", "", "", "_",""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "_", "", "", "", "", "", "", "", "_",""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "7._", "_", "_", "", "", "", "", "", "_",""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "8._", "_", "_", "_", "_", "_"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "_", ""]
];



const horizontalWords = [
  // --- HORIZONTALES ---
  new Word("class", 0, 0, direction.HORIZONTAL, 1, "Plantilla para crear objetos con propiedades y métodos."),
  new Word("algoritmo", 0, 5, direction.HORIZONTAL, 2, "Conjunto de pasos lógicos para resolver un problema."),
  new Word("async", 5, 2, direction.HORIZONTAL, 3, "Palabra clave que indica una función asíncrona."),
  new Word("booleano", 8, 6, direction.HORIZONTAL, 4, "Tipo de dato lógico que solo puede tener dos valores: true (verdadero) o false (falso)"),
  new Word("referencia", 13, 8, direction.HORIZONTAL, 5, "Enlace a un valor u objeto en memoria."),
  new Word("null", 14, 11, direction.HORIZONTAL, 6, "Valor que representa ausencia intencional de un valor."),
  new Word("dom", 14, 13, direction.HORIZONTAL, 7, "Interfaz de programación que representa la estructura de un documento HTML o XML como un árbol de objetos. Permite a JavaScript interactuar con la página web, modificar su estructura, contenido y estilo."),
  new Word("import", 18, 14, direction.HORIZONTAL, 8, "Palabra clave que permite incluir módulos o funcionalidades externas en un archivo JavaScript."),
  new Word("const", 4, 10, direction.HORIZONTAL, 9, "Declaración de variable cuyo valor no puede cambiar."),
  new Word("while", 4, 8, direction.HORIZONTAL, 10, "Estructura de control que repite un bloque de código mientras se cumpla una condición."),
];

const verticalWords = [
  // --- VERTICALES ---
  new Word("callback", 0, 0, direction.VERTICAL, 1, "Función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción."),
  new Word("json", 3, 3, direction.VERTICAL, 2, "Formato de intercambio de datos basado en texto."),
  new Word("await", 5, 2, direction.VERTICAL, 3, "Pausa la ejecución hasta que una promesa se resuelva."),
  new Word("object", 8, 5, direction.VERTICAL, 4, "Colección de pares clave-valor."),
  new Word("promise", 10, 4, direction.VERTICAL, 5, "Objeto que representa la terminación eventual (o el fracaso) de una operación asíncrona y su valor resultante"),
  new Word("let", 12, 5, direction.VERTICAL, 6, "Declaración de variable con alcance limitado al bloque."),
  new Word("array", 13, 6, direction.VERTICAL, 7, "Lista ordenada de elementos."),
  new Word("undefined", 14, 5, direction.VERTICAL, 8, "Valor por defecto de una variable no inicializada."),
  new Word("variable", 18, 1, direction.VERTICAL, 9, "Espacio para almacenar datos que pueden cambiar durante la ejecución."),
  new Word("parametro", 22, 7, direction.VERTICAL, 10, "Dato que se pasa a una función.")

]


let crosswordPlay = [...crosswordBlank];
let remainedHorizontalWords;
let remainedVerticalWords;
let gameFinished = false;

init()

async function init(){
  gameFinished = false;

  while(!gameFinished){
    console.log("-------- CRUCIGRAMA DE JAVASCRIPT CABRON 🔥🔥🔥------s--")
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

async function startGame(){
  
  crosswordPlay = crosswordBlank.map(row => [...row]);
  remainedHorizontalWords = [...horizontalWords]
  remainedVerticalWords = [...verticalWords]
  

  while(!gameFinished){
    
    console.clear()
    showClues();
    showCrossword(crosswordPlay);
    await showChooseMenu()

  }
  

}

async function showChooseMenu(){

  let choiceDirection = await prompt("Ingrese 1 si desea ingresar una palabra vertical o 2 si desea ingresar una horizontal: ");
  let choiceWordNumber;
  switch (choiceDirection){

      case '1':
        choiceWordNumber = await prompt("Ingrese el numero de la palabra que desea ingresar: ");
        await chooseWord(direction.VERTICAL, choiceWordNumber)
        break;

      case '2':
        choiceWordNumber = await prompt("Ingrese el numero de la palabra que desea ingresar: ");
        await chooseWord(direction.HORIZONTAL, choiceWordNumber)
        break;

      default:
       console.log("Ingresa un valor valido de orientacion.")

  }
}



async function chooseWord(wordDirection, wordNumber){

  let arrayWords;
  
  if(wordDirection == direction.HORIZONTAL){
    arrayWords = remainedHorizontalWords;
  } 

  if(wordDirection == direction.VERTICAL){
    arrayWords = remainedVerticalWords;

  } 

  let indexWord = parseInt(arrayWords.findIndex(word => word.number == wordNumber));
  if(indexWord == -1){
    console.log("Ingrese el numero de una palabra valida")
    return
  }
  let promptWord = await prompt(`Ingrese la palabra ${wordNumber}: `);

  if (promptWord == arrayWords[indexWord].word){
    console.log("La palabra es correcta!🤪🤪🤪")
    let word = arrayWords[indexWord];
    arrayWords.splice(indexWord, 1)
    putWordOnBoard(word)
    showWin()
    await prompt("Presione enter para continuar")
    
  }else{
    console.log("La palabra es incorrecta")
  }

}

function showWin(){
  if(remainedHorizontalWords.length == 0 && remainedVerticalWords.length == 0){
    console.log("HAS GANADOOOOOOOOOOOOO🎉🎉🎉🎉🎉🎉")
    gameFinished = true
  }

}

function putWordOnBoard(word){

  if(word.direction == direction.VERTICAL){
 
    for(let ii = 0; ii < word.word.length; ii++){

      crosswordPlay[word.y + ii][word.x] =
      crosswordPlay[word.y + ii][word.x].replace('_', word.word[ii]);


    }
  }

  if(word.direction == direction.HORIZONTAL){
    
    for(let ii = 0; ii < word.word.length; ii++){
      

      crosswordPlay[word.y][word.x + ii] =
      crosswordPlay[word.y][word.x + ii].replace('_', word.word[ii]) ;

    }
  }  



}


function showCrossword(crossword){
  for(let ii = 0; ii < crossword.length; ii++){
    let line = ''
    for(let jj = 0; jj < crossword[ii].length; jj++){
      line +=  crossword[ii][jj].padStart(3,' ').padEnd(5, ' ')
    }
    console.log(line)
  }
}

function showClues(){
  console.log("-------- PALABRAS HORIZONTALES -------- ")
  for (let word of horizontalWords){
    console.log(word.number ,'.', word.description)
  }

  console.log("-------- PALABRAS VERTICALES -------- ")
  for (let word of verticalWords){
    console.log(word.number,'.' , word.description)
  }

}



