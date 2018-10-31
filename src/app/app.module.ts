import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecisionMakingComponent } from './components/decision-making/decision-making.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const appRoutes:Routes=[
  {
    path:'',
    component:DecisionMakingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DecisionMakingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
