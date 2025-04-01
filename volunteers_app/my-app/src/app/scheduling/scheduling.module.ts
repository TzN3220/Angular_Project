import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { schedulingService } from './schedulingService';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SchedulingComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[SchedulingComponent],
  providers:[schedulingService]
})
export class SchedulingModule { }
