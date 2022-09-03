import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  apiUrl = "https://api.themoviedb.org/3/";
  
  constructor(private http: HttpClient) {}

  
  getUsers(e:number){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=43f495f397f35a611171a93d26fe0ae8&language=en-US&page='+e;
    return this.http.get<any>(url);
}

searchmovies(movie:string){
  const url = 'https://api.themoviedb.org/3/search/' + movie +'?api_key=43f495f397f35a611171a93d26fe0ae8&language=en-US&page=1&include_adult=false';

  return this.http.get<any>(url);
}

movieonid(id:any){
 const url = 'https://api.themoviedb.org/3/movie/' +id+'?api_key=43f495f397f35a611171a93d26fe0ae8&language=en-US';
 return this.http.get<any>(url);
}


}
