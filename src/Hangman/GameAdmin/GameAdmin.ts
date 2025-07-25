import Board from "../Board/Board.js";
import Dictionary from "../Dictionary/Dictionary.js";
import View from "../View/View.js";
import Imput from "../../Imput/Imput.js";


export default class GameAdmin {


    private word: string;
    private board: Board;
    private dictionary: Dictionary;
    private gameFinished: boolean;
    private alreadyUsedLetters: string[];
    private lives: number;

    constructor(){
        this.dictionary = new Dictionary();
        this.word = this.dictionary.getRandomWord()
        this.board = new Board(this.word.length)
        this.gameFinished = false;
        this.lives = 3;
        this.alreadyUsedLetters = [];
    }

    public async startGame(){

        View.showWelcome()
        while(!this.gameFinished){
            View.showHangman(this.lives);
            View.showBoard(this.board.board)
            
            await this.doAction()
            
        }
        


    } 
    
   private async  doAction(){

        let choose = await Imput.prompt("Ingresa 1 si quieres probar un caracter, Ingresa 2 si quieres ingresar la palabra completa: ");
        
        switch(choose){
            case "1":
                if(await this.setLetter()){
                    View.showAssertMessage()

                    if(this.board.isFull()){
                        this.gameFinished = true;
                        View.showWin();
                    }

                }else{
                    View.showMistakeMessage()
                    this.lives --;
                    View.showLives(this.lives);
                    
                    this.checkLoseGame();

                }

                break;

                
            case "2":

                let wordImput = await Imput.prompt("Ingresa la palabra que crees que es: ");
                if(this.checkWord(wordImput)){
                    View.showAssertMessage()                   
                    View.showWin()
                }else{
                    View.showLose()
                    View.showHangman(this.lives);
                } 
                this.gameFinished = true;


                break;
            default: 
                console.log("Ingrese un valor valido.")


        }

    }

    private checkWord(word:string):boolean{
        if( word == this.word){
            return true;
        }
        return false;

    }

    private checkLoseGame(){
        if(this.lives == 0){
            View.showLose()
            View.showHangman(this.lives);
            this.gameFinished = true;
        }
    }

    private async setLetter(): Promise<boolean>{
        let choose = await Imput.prompt("Ingrese la letra que desea probar: ")

        if(this.alreadyUsedLetters.includes(choose)) return false;

        let positions: number[] = this.findWordPositions(this.word, choose);

        if(positions.length == 0){
            return false;
        } 
        this.alreadyUsedLetters.push(choose)        
        for(let position of positions){
            this.board.setAtPosition(position, choose);
        }
        
        return true
    
        

    }


    private findWordPositions(word: string, char: string): number[] {
        const positions: number[] = [];

        for (let i = 0; i < word.length; i++) {
            if (word[i] === char) {
            positions.push(i);
            }
        }

        return positions;
    }
    



}