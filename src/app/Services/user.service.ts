import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private REST_API_SERVER = 'http://127.0.0.1:8000/api/user'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  public signIn(dataLogin: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/signin`
    return this.httpClient.post<any>(url, dataLogin,this.httpOptions)
  }
}
