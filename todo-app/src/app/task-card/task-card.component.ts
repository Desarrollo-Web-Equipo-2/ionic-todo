import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() task !: Task;

  editedDescription: string = '';
  isOpen: boolean = false;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.editedDescription = this.task.description;
  }

  onEdit() {
    this.isOpen = true;
  }

  onDelete() {
    this.tasksService.delete(this.task.id).subscribe((v) => {
      console.log("DELETED");
    })
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.task, 'confirm');
  }

  onWillDismiss(event: Event) {
    this.isOpen = false;
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      const newTask = {
        ...this.task, 
        description: this.editedDescription 
      };

      this.tasksService.updateTask(newTask).subscribe((value) => {
        this.task.description = value.description;
      });
    } else {
      this.editedDescription = this.task.description;
    }
  }
}
