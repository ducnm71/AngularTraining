import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private REST_API_SERVER = 'http://127.0.0.1:8000/api/page'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  constructor(private httpClient: HttpClient) { }

  public getPages(): Observable<any> {
    const url = `${this.REST_API_SERVER}/all/1`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
}
