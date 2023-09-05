import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private httpClient: HttpClient) { }

  private REST_API_SERVER = 'http://127.0.0.1:8000/api/story'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  public listStory(): Observable<any> {
    const url = `${this.REST_API_SERVER}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
}
