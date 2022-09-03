import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { callbackify } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
title = "Trending";
page=1;
totalLength:any;
  constructor(private apiservice: ApiServiceService,) { }
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
}


