import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleList } from '../models/people-list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = 'http://agl-developer-test.azurewebsites.net/people.json';
  constructor(private http: HttpClient) {}

  // get the json data from the hosted service
  getPeople(): Observable<PeopleList[]> {
    return this.http.get<PeopleList[]>(this.url);
  }
}
