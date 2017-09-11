import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  id:any
  standingsData:any
  leagueCaption:any
  standing:any

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
   }

  goToTablescreen(teamName, url){
    localStorage.setItem('teamURL', url);
    localStorage.setItem('teamName', teamName);
    this.router.navigate(['team']);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.dataService.getStandingsData(this.id).subscribe(res=>{
      this.standingsData = res
      this.leagueCaption = this.standingsData.leagueCaption
      this.standing = this.standingsData.standing
    })
  }
}
