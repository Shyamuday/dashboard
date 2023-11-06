import { Component, ViewChild } from "@angular/core";

import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent {

  Highcharts: typeof Highcharts = Highcharts;

  data = [
    {
      name: "INCOME",
      data: [50, 142, 90, 42, 34, 110, 38, 6, 70, 175, 90, 45],
      type: "column",
      color: '#506ddf'
    },
    {
      name: "BORROW",
      data: [60, 150, 98, 48, 45, 125, 49, 10, 80, 190, 100, 52],
      type: "column",
      color: '#d0d2d9'
    },
  ];


  chartOptions = {
    chart: {
      type: "column" // Set the chart type to 'column'
    },
    title: {
      text: "Balance Overview",
      align: 'left' as const,
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "",
      },
      gridLineWidth: 1,
      gridLineColor: '#E0E0E0',
      tickPositions: [0, 10, 50, 100, 200]
    },
    plotOptions: {
      column: {
        pointWidth: 6,
        borderRadius: 10,
      },
      series: {
        stacking: 'normal' as 'normal'
      }
    },
    legend: {
      layout: 'horizontal' as const,
      align: 'right' as const,
      verticalAlign: 'top' as const,
      x: 0,
      y: 0,
      floating: true,
      backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    series: this.data as Highcharts.SeriesOptionsType[]
  };


}

