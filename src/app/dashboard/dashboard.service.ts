import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  //add data
  public importantDates:object = {
       "key": "pacesetterDate",
       "importantDateValue":"4,19,2020"
  }

 // getter
 get ImportantDates() {
  return this.importantDates;
}
}
