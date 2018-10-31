import {CafeBoardGame} from'./cafe-board-game'

export class BoardGame {
    private idBoardGame:number;
    private nameBoardGame:String;
    private pictureBoardGame:String;
    private CafeBoardGame:Array<CafeBoardGame>;

    public getIdBoardGame(): number
 {
        return this.idBoardGame;
    }

    public setIdBoardGame(idBoardGame: number
): void {
        this.idBoardGame = idBoardGame;
    }

    public getNameBoardGame(): String
 {
        return this.nameBoardGame;
    }

    public setNameBoardGame(nameBoardGame: String
): void {
        this.nameBoardGame = nameBoardGame;
    }

    public getPictureBoardGame(): String
 {
        return this.pictureBoardGame;
    }

    public setPictureBoardGame(pictureBoardGame: String
): void {
        this.pictureBoardGame = pictureBoardGame;
    }

    public getCafeBoardGame(): Array<CafeBoardGame> {
        return this.CafeBoardGame;
    }

    public setCafeBoardGame(CafeBoardGame: Array<CafeBoardGame>): void {
        this.CafeBoardGame = CafeBoardGame;
    }



}