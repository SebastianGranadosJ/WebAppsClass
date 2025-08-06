
export default class Board{

    private _board: string[];
    private _blankSpaces;


    constructor(lengthBoard: number){
        this._board = [];
        this.fillBoard(lengthBoard)
        this._blankSpaces = lengthBoard;
    }


     public setAtPosition(position: number, letter: string){
        if(letter != "_"){
            this._blankSpaces --;
        }

        this._board[position] = letter;
        
    }

    public get board(){
        return this._board
    }

    public isFull(){
        if(this._blankSpaces == 0){
            return true;
        }
        return false;
    }


    private fillBoard(lengthBoard: number){
        for(let ii = 0; ii <lengthBoard; ii++){
            this._board.push("_")
        }

    }
    
}