import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser, USERS } from './usersData';
import { HttpClient } from '@angular/common/http';
import { IPost } from './intrefaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return of(USERS);
  }
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUserByName(name: string): Observable<IUser | undefined> {
    const user = USERS.find(el => el.name === name);

    if (user) {
      return of(user);
    }

    return of(undefined);
  }
}
