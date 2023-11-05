import { Component, Input } from '@angular/core';
import { NewUser } from '../dashboard.interface';

@Component({
  selector: 'app-right-side-new-user',
  templateUrl: './right-side-new-user.component.html',
  styleUrls: ['./right-side-new-user.component.scss']
})
export class RightSideNewUserComponent {

  @Input() new_users!: NewUser[]
}
