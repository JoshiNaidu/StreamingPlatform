import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-movieview',
  templateUrl: './movieview.component.html',
  styleUrls: ['./movieview.component.css']
})
export class MovieviewComponent implements OnInit {

  constructor(private apiservice:ApiServiceService,private storage:StorageServiceService) { }
  moviedata: any = [];
  ngOnInit(): void {
    let id = JSON.parse(this.storage.getDataFromStorage('id'));
    this.apiservice.movieonid(id.p).subscribe(response =>{
      this.moviedata = response;

      console.log(this.moviedata,'data')
    })
  }

}
