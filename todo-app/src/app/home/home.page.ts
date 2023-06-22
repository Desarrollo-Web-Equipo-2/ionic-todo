import { Component } from '@angular/core';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public currentUserService: CurrentUserService) {}

}
