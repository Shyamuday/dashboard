import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  dashBoard!: Dashboard;

  ngOnInit(): void {

    this.dashboardService.getDashboardData().subscribe(dashboard => {
      console.log(dashboard)
      this.dashBoard = dashboard;
    })


    // this.dashBoardData$ = this.dashboardService.getDashboardData().pipe((catchError(() => {
    //   return of({} as Dashboard)
    // })))
  }
}
