import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../../pages/user-page/users/users.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';
import { UserCardComponent } from '../../pages/user-page/user-card/user-card.component';
import { authGuard } from '../../guards/auth.guard';
import { LoginComponent } from '../../pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':name', component: UserCardComponent }],
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
