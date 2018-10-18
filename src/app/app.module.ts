import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecisionMakingComponent } from './components/decision-making/decision-making.component';

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
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
