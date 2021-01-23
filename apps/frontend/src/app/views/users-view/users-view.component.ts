import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  constructor(private userService: UserService) { }

  users$ = this.userService.entities$;

  ngOnInit(): void {
    this.userService.getAll();
  }

  addUser() {
    alert('add user');
  }

  editUser(username: string) {
    alert('edit user: ' + username);
  }



}
