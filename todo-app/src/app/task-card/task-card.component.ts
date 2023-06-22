import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent  implements OnInit {

  @Input() task !: Task;

  constructor() { }

  ngOnInit() {}

}
