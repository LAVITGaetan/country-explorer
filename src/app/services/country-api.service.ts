import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  api_url = 'https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }


  getAllCountries(): Observable<any> {
    return this.http.get(`${this.api_url}/all`)
  }

  getCountriesByRegion(region : string): Observable<any> {
    return this.http.get(`${this.api_url}/region/${region}`)
  }
}
