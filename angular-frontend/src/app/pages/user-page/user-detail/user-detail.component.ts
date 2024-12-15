import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  @Input() name?: string;
  @Input() age?: number;

  selectedUser?: string;

  onClickSelectUser(name: string | undefined): void {
    this.selectedUser = name;

    console.log(this.selectedUser);
  }
}
