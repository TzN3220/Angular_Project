import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { Scheduling } from './Scheduling.model';
import { scheduleService } from './schedule.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
  ],
  providers:[Scheduling,scheduleService]
})
export class SchedulingModule { }
