import { Component, Input } from '@angular/core';
import { RecentOrder } from '../dashboard.interface';

@Component({
  selector: 'app-left-side-recent-order',
  templateUrl: './left-side-recent-order.component.html',
  styleUrls: ['./left-side-recent-order.component.scss']
})
export class LeftSideRecentOrderComponent {

  @Input() recent_order!: RecentOrder[];
}
