import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:5000'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }


  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = `${this.REST_API_SERVER}/users`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
}
