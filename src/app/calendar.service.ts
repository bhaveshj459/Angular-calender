import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  events: any[]=[]; 

  constructor() { }

  setSharedVariable(data: any[]) {
    this.events = data;
  }

  getSharedVariable() {
    return this.events;
  }
}
