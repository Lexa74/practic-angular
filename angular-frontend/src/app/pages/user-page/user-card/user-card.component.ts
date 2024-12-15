import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { IUser } from '../../../services/user/usersData';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserByName();
  }

  user?: IUser;

  getUserByName(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.userService
        .getUserByName(name)
        .subscribe((res) => (this.user = res));
    }
  }

  goBack(): void {
    this.location.back();
  }
  goToMain(): void {
    this.router.navigateByUrl('users');
  }
}
