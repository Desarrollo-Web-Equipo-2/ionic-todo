import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskCardListComponent } from '../task-card-list/task-card-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    TaskCardComponent,
    TaskCardListComponent,
  ],
})
export class HomePageModule {}
