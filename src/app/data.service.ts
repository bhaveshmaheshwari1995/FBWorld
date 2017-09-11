import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  options:any
  constructor(private http:Http) {
    let headers = new Headers();
    headers.append('X-Auth-Token', '464abd99d2b240e2bcfac11d48d4791f');
    this.options = new RequestOptions({ headers: headers });
  }  

  getCompetitionData(){
    return this.http.get('http://api.football-data.org/v1/competitions/?season=2015',this.options).map(res=>res.json());
  }

  getStandingsData(id){
    return this.http.get('http://api.football-data.org/v1/competitions/'+id+'/leagueTable',this.options).map(res=>res.json());
  }
  
  getTeamPlayers(url){
    return this.http.get(url+'/players',this.options).map(res=>res.json());
  }

  getFixtureDetails(url){
    return this.http.get(url+'/fixtures?timeFrame=n40',this.options).map(res=>res.json());
  }  
}
