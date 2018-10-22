import { Injectable } from '@angular/core';
import { WsTaskService } from './ws-task.service';
import { UserData } from 'src/app/entity/user-data';

@Injectable({
  providedIn: 'root'
})
export class DecisionMakingService {

  constructor(private wsTask:WsTaskService) { }

  postUserData(userData:UserData){
    this.wsTask.doPost('/create/userData',userData).then((data:any)=>{
      console.log(data)
    })
  }

}
