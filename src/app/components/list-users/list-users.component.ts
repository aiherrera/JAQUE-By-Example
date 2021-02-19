import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { ListUsersService } from './list-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'gender', 'image'];
  datasource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  users: User[] = []
  pageEvent!: PageEvent;

  constructor(
    private usersService: ListUsersService
  ) { }

  ngOnInit(): void {
    this.onListUsers()
  }

  onListUsers(): void {
    this.usersService.getListUsers().subscribe((users: User[]) => {
      this.datasource.data = [...users]
      this.datasource.paginator = this.paginator
    })
  }

}
