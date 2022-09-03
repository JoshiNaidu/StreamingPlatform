import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';
// import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
title = "Trending";
searchText:any;
page=1;
totalLength:any;
// filmIcon = faFilm;
  constructor(private apiservice: ApiServiceService,private storage: StorageServiceService) { }
  users = [];
  ngOnInit(): void {
    this.apiservice.getUsers(1).subscribe(response => {
      this.users = response.results;
      this.totalLength = 10000;

      // this.totalLength = response.total_results;

      // console.log(this.totalLength)
      // debugger
      // console.log(response,'movies')

  });
  }
  callpage(page) {
    let e = page;
    this.apiservice.getUsers(e).subscribe(response =>{
      this.users = response.results;
    })    
  }
  search(searchText){
   this.apiservice.searchmovies(searchText).subscribe(response =>{
    this.users = response.results;
   })
  }
 setdata(p:number){
  this.storage.putDataInStorage("id",JSON.stringify({p}));
 }
}


