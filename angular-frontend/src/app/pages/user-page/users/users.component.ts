import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../services/user/usersData';
import { NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../../../services/user/user.service';
import { IPost } from '../../../services/user/intrefaces';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    UpperCasePipe,
    NgIf,
    UserDetailComponent,
    RouterOutlet,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.getUsers();
    this.getPosts();
  }

  users: IUser[] = [];
  userName: string = 'Hello';
  filterUsers?: IUser[];
  posts: IPost[] = [];
  title = 'angular-frontend';
  namePage = 'Main page';

  filterByGender(isMale: boolean): void {
    this.filterUsers = this.users.filter(el => el.isMale === isMale);
  }

  setUserName(e: Event) {
    const target = e.target as HTMLInputElement;
    this.userName = target.value;
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(res => (this.users = res));
  }
  getPosts(): void {
    this.usersService.getPosts().subscribe(res => (this.posts = res));
  }
}
