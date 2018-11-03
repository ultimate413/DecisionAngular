
import { CafeModel } from './cafe';

export class BoardGameModel {
    private idBoardGame:number;
    private nameBoardGame:String;
    private pictureBoardGame:String;
    private cafeBoardGame:Array<CafeModel>;

    public getCafeBoardGame(): Array<CafeModel> {
        return this.cafeBoardGame;
    }

    public setCafeBoardGame(cafeBoardGame: Array<CafeModel>): void {
        this.cafeBoardGame = cafeBoardGame;
    }


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
   


}