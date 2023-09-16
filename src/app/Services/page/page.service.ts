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

  public getPages(id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/all/${id}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  public page(id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  public addPage(id: any, data: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }

  public removePage(id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.delete<any>(url, this.httpOptions)
  }

}
