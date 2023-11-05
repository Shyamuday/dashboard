import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RightSideNewUserComponent } from './right-side-new-user/right-side-new-user.component';
import { LeftSideRecentOrderComponent } from './left-side-recent-order/left-side-recent-order.component';
import { BottomGraphCardComponent } from './bottom-graph-card/bottom-graph-card.component';
import { SalesStaticsComponent } from './bottom-graph-card/sales-statics/sales-statics.component';
import { BalanceOverviewComponent } from './bottom-graph-card/balance-overview/balance-overview.component';
import { TopProductsComponent } from './bottom-graph-card/top-products/top-products.component';
import { TopDataChartComponent } from './top-data-chart/top-data-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    RightSideNewUserComponent,
    LeftSideRecentOrderComponent,
    BottomGraphCardComponent,
    SalesStaticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent,
    TopDataChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,

  ]
})
export class DashboardModule { }
