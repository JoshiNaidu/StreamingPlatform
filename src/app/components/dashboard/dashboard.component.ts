import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
title = "Trending";
  constructor(private apiservice: ApiServiceService,) { }
  users = [];
  ngOnInit(): void {
    this.apiservice.getUsers(1).subscribe(response => {
      this.users = response.results;
      debugger
      console.log(response,'movies')
  });
  }

}
