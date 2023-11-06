import { Component, ViewChild } from "@angular/core";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent {

  Highcharts: typeof Highcharts = Highcharts;


  data = [{
    name: "men",
    data: [
      {
        name: "Category 1",
        y: 44,
        dataLabels: {
          enabled: false // Hide the category label for this data point
        }
      },
      {
        name: "Category 2",
        y: 55,
        dataLabels: {
          enabled: false // Hide the category label for this data point
        }
      },
      {
        name: "Category 3",
        y: 13,
        dataLabels: {
          enabled: false // Hide the category label for this data point
        }
      },
      {
        name: "Category 4",
        y: 43,
        dataLabels: {
          enabled: false // Hide the category label for this data point
        }
      },
      {
        name: "Category 5",
        y: 22,
        dataLabels: {
          enabled: false // Hide the category label for this data point
        }
      }
    ],
    type: "pie",
    innerSize: "80%"
  }];




  chartOptions = {
    chart: {
      type: "pie"

    },
    title: {
      text: "Top Products",
      align: 'left' as const
    },
    colors: ["#506ddf", "#7e95f1", "#7481a0", "#74819b", " #d0d2d9"],
    series: this.data as Highcharts.SeriesOptionsType[]
  };

  constructor() {
  }
}


//   data = [
//   {
//     name: "Men",
//     data: [
//       {
//         name: "Category 1",
//         y: 44,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 2",
//         y: 55,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 3",
//         y: 13,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 4",
//         y: 43,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 5",
//         y: 22,
//         dataLabels: {
//           enabled: false
//         }
//       }
//     ],
//     type: "pie",
//     innerSize: "80%"
//   },
//   {
//     name: "Women",
//     data: [
//       {
//         name: "Category 1",
//         y: 30,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 2",
//         y: 25,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 3",
//         y: 15,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 4",
//         y: 20,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 5",
//         y: 28,
//         dataLabels: {
//           enabled: false
//         }
//       }
//     ],
//     type: "pie",
//     innerSize: "80%"
//   },
//   {
//     name: "Electronic",
//     data: [
//       {
//         name: "Category 1",
//         y: 60,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 2",
//         y: 40,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 3",
//         y: 35,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 4",
//         y: 50,
//         dataLabels: {
//           enabled: false
//         }
//       },
//       {
//         name: "Category 5",
//         y: 55,
//         dataLabels: {
//           enabled: false
//         }
//       }
//     ],
//     type: "pie",
//     innerSize: "80%"
//   }
// ];
