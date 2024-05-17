import {Component} from '@angular/core';
import {IUser} from "../usersData";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {IPost, ServiceUserService} from "../service-user.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    UpperCasePipe,
    NgIf,
    UserDetailComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
  constructor(private usersService: ServiceUserService) {  }

  ngOnInit() {
    this.getUsers()
    this.getPosts()
  }

  users: IUser[] = [];
  userName: string = 'Hello'
  filterUsers?: IUser[]
  posts: IPost[] = []

  filterByGender(isMale: boolean): void {
    this.filterUsers = this.users.filter((el) => el.isMale === isMale)
  }

  setUserName(e: Event) {
    const target = e.target as HTMLInputElement
    this.userName = target.value
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((res) => this.users = res)
  }
  getPosts(): void {
    this.usersService.getPosts().subscribe((res) => this.posts = res)
  }
}
