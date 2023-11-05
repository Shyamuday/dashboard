import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-sales-statics',
  templateUrl: './sales-statics.component.html',
  styleUrls: ['./sales-statics.component.scss']
})
export class SalesStaticsComponent {

  @ViewChild("chart") chart!: ChartComponent
  public chartOptions: Partial<ChartOptions> | any;



  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [4, 12, 25, 21, 28, 25, 38]
        }
      ],


      chart: {
        height: 250,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        width: 3,
        curve: 'smooth',
        colors: ['#506ddf'],
        shadow: {
          enabled: true,  // Enable the shadow
          color: '#506ddf',   // Shadow color
          top: 18,         // Distance of the shadow from the line
          left: 15,        // Distance of the shadow from the line
          blur: 7,         // Blur radius of the shadow
          opacity: 0.3     // Shadow opacity
        },
      },
      xaxis: {
        type: "day",
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      title: {
        text: "Sales Statistics",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666"
        }
      },
      subtitle: {
        text: "All Days",
        align: "right",
        style: {
          fontSize: "14px",
          color: "#333"
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 4,
        labels: {
          formatter: function (value: string) {
            return "$" + value;
          },
        },
      },
    };
  }

}
