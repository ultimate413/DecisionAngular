import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/entity/user-data';

@Component({
  selector: 'app-decision-making',
  templateUrl: './decision-making.component.html',
  styleUrls: ['./decision-making.component.css']
})
export class DecisionMakingComponent implements OnInit {
  
  private user = new UserData();
  constructor() { }

  ngOnInit() {
  }

}
