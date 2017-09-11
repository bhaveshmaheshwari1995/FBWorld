import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {DataTableModule} from "angular2-datatable";
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { StandingsComponent } from './standings/standings.component';
import { TeamComponent } from './team/team.component';

import { DataService } from './data.service';


const appRoutes: Routes = [
  { path: 'competition',
    component: CompetitionComponent },
  { path: 'standing/:id',
    component: StandingsComponent },
  { path: 'team',
    component: TeamComponent },
  { path: '',
    redirectTo: 'competition',
    pathMatch: 'full' },
  { path: '**',
    redirectTo: 'competition',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    StandingsComponent,
    TeamComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
