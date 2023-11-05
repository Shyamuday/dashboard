import { Component, Input } from '@angular/core';
import { TopCard } from '../dashboard.interface';

@Component({
  selector: 'app-top-data-chart',
  templateUrl: './top-data-chart.component.html',
  styleUrls: ['./top-data-chart.component.scss']
})
export class TopDataChartComponent {
  // icon = [
  //   <i class="fa-solid fa-music" > </i>
  //   < i class= "fa-solid fa-chart-pie" > </>
  //   < i class= "fa-solid fa-rotate" > </>
  //   < i class= "fa-solid fa-download" > </>
  // ]
  @Input() cardData!: TopCard[]
}
