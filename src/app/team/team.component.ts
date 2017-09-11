import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  url:any
  playerList:any
  teamName:any
  fixtureDetails:any

  text: any = { "Weeks": "Weeks", 
    "Days": "Days", "Hours": "Hours",
     Minutes: "Minutes", "Seconds": "Seconds",
    "MilliSeconds":"MilliSeconds" };  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.url = localStorage.getItem('teamURL');
    this.teamName = localStorage.getItem('teamName');
    this.dataService.getTeamPlayers(this.url).subscribe(res=>{
      this.playerList  = res.players;
    })
    this.dataService.getFixtureDetails(this.url).subscribe(res=>{
      this.fixtureDetails  = res.fixtures;
    })
  }
}