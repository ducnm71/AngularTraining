import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>('');
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
}
