import { Injectable } from '@angular/core';
import { CurrentUserService } from './current-user.service';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private currentUserService: CurrentUserService, private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(`http://localhost:3000/users/${this.currentUserService.currentUser.id}/tasks`);
  }
}
