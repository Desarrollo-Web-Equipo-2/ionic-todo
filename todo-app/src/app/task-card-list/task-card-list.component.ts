import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-card-list',
  templateUrl: './task-card-list.component.html',
  styleUrls: ['./task-card-list.component.scss'],
})
export class TaskCardListComponent  implements OnInit {

  taskList: Task[] = [];
  //  = [
  //   {
  //     id: 1,
  //     userId: 1,
  //     description: 'Desc1',
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     userId: 1,
  //     description: 'Desc2',
  //     done: true,
  //   },
  //   {
  //     id: 3,
  //     userId: 1,
  //     description: 'Desc3',
  //     done: false,
  //   },
  // ];

  constructor(private tasksService: TasksService) { 
    tasksService.getTasks().subscribe({
      next: (list) => {
        console.log("LISTA", list);
        this.taskList = list;
      }
    })
  }

  ngOnInit() {}

}
