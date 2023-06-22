import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-card-list',
  templateUrl: './task-card-list.component.html',
  styleUrls: ['./task-card-list.component.scss'],
})
export class TaskCardListComponent  implements OnInit {

  taskList: Task[] | undefined;

  constructor(private tasksService: TasksService) { 
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe({
      next: (list) => {
        this.taskList = list;
      }
    })
  }

}
