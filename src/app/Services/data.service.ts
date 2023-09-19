import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>('');
  private title = new BehaviorSubject<any>({});
  constructor() { }

  getData() {
    return this.dataSubject.asObservable();
  }

  setData(data: string) {
    this.dataSubject.next(data);
  }

  clearData() {
    this.dataSubject.next('');
  }

  getTitle() {
    return this.title.asObservable()
  }

  setTitle(data: object){
    this.title.next(data)
  }

  clearTitle(){
    return this.title.next({})
  }
}
