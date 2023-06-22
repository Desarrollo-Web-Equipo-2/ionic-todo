import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public users: User[] = [
    { id: 1, name: 'Pepe' },
    { id: 2, name: 'Paco' },
  ];

  public currentUser: User = this.users[0];

  constructor() { }

  selectUser(id: number) {
    this.currentUser = this.users.filter(x => x.id === id)[0];
  }
}
