import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { User } from '@ks-work-schedule/models';

@Component({
  selector: 'ks-work-schedule-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  displayedColumns = ['index', 'fullName', 'buttons'];

  @Input() usersList: User[];
  @Output() addButtonClick = new EventEmitter<void>();
  @Output() editButtonClick = new EventEmitter<string>();
}
