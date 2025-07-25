

export default class View{

    public static showWelcome(){
        console.log("------------ BIENVENIDO AL AHORCADO ------------");
        console.log("Adivina la palabra relacionada con JavaScript, ingresa una letra que creas que contenga la palabra. Si crees que ya sabes cual es la palabra ingresala.")
        console.log("Solo tienes tres vidas.")
    }

    public static showBoard(board: string[]){
        console.log()
        console.log()

        let line: string = "   "
        for(let ii = 0; ii < board.length;ii++){
            line += board[ii] + "   ";
        }
        console.log(line);
        console.log()
        console.log()

    }
    public static showLose(){
        console.log("PERDISTE JAJAJAJAJAJJA");
    }

    public static showWin(){
        console.log("GANASTE CHAVAAAAAAAAAAAAAL")
    }

    public static showLives(lives:number){
        console.log("Te quedan la siguientes vidas: ", lives);

    }

    public static showAssertMessage(){
        console.log("ASERTASTE QUE PROOOO");
    }

    public static showMistakeMessage(){
        console.log("JAJAJAJAJ TE EQUIVOCASTE");
    }

    public static showHangman(lives: number): void {
        const stages:string[] = [
            `
            +---+
            |   |
            O   |
           /|\\  |
           / \\  |
                ===`,
            `
            +---+
            |   |
            O   |
           /|\\  |
                |
                ===`,
            `
            +---+
            |   |
            O   |
            |   |
                |
                ===`,
            `
            +---+
            |   |
                |
                |
                |
                ===`
        ];

        // Limitar vidas entre 0 y 3
        console.log(stages[lives]);
        }



}