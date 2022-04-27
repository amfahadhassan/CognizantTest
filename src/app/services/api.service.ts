import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://www.omdbapi.com/?s=$'
  apiKey = '&apikey=c296f12b';
  constructor(private api: HttpClient) { }

  getSearchResult(searchValue:string){
    const url = this.baseUrl + searchValue + this.apiKey;
    return this.api.get(url)
    .pipe(map(result => result))
  }

}
