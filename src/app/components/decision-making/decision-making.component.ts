import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/entity/user-data';
import { DecisionMakingService } from 'src/app/shared_service/decision-making.service';
@Component({
  selector: 'app-decision-making',
  templateUrl: './decision-making.component.html',
  styleUrls: ['./decision-making.component.css']
})
export class DecisionMakingComponent implements OnInit {
  
  private user = new UserData();
  constructor(private DecisionMakingController:DecisionMakingService) { }

  doPost(){
    this.DecisionMakingController.postUserData(this.user);
  }

  ngOnInit() {
  }

}
