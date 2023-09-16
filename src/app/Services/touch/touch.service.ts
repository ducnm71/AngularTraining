import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouchService {

  private REST_API_SERVER = 'http://127.0.0.1:8000/api/touch'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  constructor(private httpClient: HttpClient) { }

  public getAllTouch(page_id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/all/${page_id}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  public addTouch(page_id: any, data: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/${page_id}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }

  public deleteTouch(touch_id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/${touch_id}`
    return this.httpClient.delete<any>(url, this.httpOptions)
  }
}
