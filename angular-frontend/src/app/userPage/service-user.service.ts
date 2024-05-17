import { Injectable } from '@angular/core';
import {IUser, USERS} from "./usersData";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return of(USERS)
  }
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
