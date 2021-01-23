import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@ks-work-schedule/models';

@Component({
  selector: 'ks-work-schedule-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  @Input() usersList: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
