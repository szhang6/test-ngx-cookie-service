import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  importantDates: object;

  constructor(private dashboardService: DashboardService) {
    this.importantDates = dashboardService.importantDates;
  }

  ngOnInit() {
    console.log(11);
  }

}
