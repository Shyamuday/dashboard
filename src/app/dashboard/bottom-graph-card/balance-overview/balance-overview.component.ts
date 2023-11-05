import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};


@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      colors: ["#007BFF", "#007BFF"],
      series: [
        {
          name: "BORROW",
          data: [60, 150, 98, 48, 45, 125, 49, 10, 80, 190, 100, 52]
        },
        {
          name: "INCOME",
          data: [50, 142, 90, 42, 34, 110, 38, 6, 70, 175, 90, 45]
        },

      ],
      chart: {
        type: "bar",
        height: 250,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        }
      },
      title: {
        text: "Balance Overview",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666"
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      legend: {
        position: "top",
      },
      fill: {
        opacity: 1
      }
    };
  }
}
