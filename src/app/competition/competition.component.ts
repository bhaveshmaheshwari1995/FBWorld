import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  competitionList:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCompetitionData().subscribe(res=>{
      this.competitionList = res
    })
  }

}