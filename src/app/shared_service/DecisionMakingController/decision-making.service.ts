import { Injectable } from '@angular/core';
import { WsTaskService } from '../ws-task.service';
import { UserDataModel } from '../../entity/user-data';
import { BoardGameModel } from '../../entity/board-game';
import { CafeModel } from '../../entity/cafe';

@Injectable({
  providedIn: 'root'
})
export class DecisionMakingService {
 

  constructor(private wsTask:WsTaskService) { }

  postUserData(userData:UserDataModel):Promise<BoardGameModel[]|void>{
    return this.wsTask.doPost('/create/userData',userData).then((data:any)=>{
      console.log(data);
      let responseData = data;
      let boardGames = new Array<BoardGameModel>()

     if(responseData!=null){
       for(let boardGame of responseData){
          let resBoardGame = new BoardGameModel();
          resBoardGame.setIdBoardGame(boardGame.idBoardGame);
          resBoardGame.setNameBoardGame(boardGame.nameBoardGame);
          resBoardGame.setPictureBoardGame(boardGame.pictureBoardGame);
          let cafes = new Array<CafeModel>();
          for(let cafe of boardGame.CafeBoardGame){
            let resCafe = new CafeModel();
            resCafe.setId(cafe.cafe.id);
            resCafe.setNameCafe(cafe.cafe.nameCafe);
            resCafe.setGoogleMapLink(cafe.cafe.googleMapLink);
            cafes.push(resCafe);
          }
          resBoardGame.setCafeBoardGame(cafes);
          boardGames.push(resBoardGame);
       }
     } return boardGames;
    },error=>{
      console.log(error);
    })
  }




}
