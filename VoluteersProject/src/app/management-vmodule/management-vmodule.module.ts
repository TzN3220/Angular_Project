import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditingComponent } from './editing/editing.component';
import { ListVoluteersComponent } from './list-voluteers/list-voluteers.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Voluteer } from './voluteer.model';
import { ReactiveFormsModule } from '@angular/forms';
import { SchedulingModule } from '../schedulingmodule/scheduling.module';
import { scheduleService } from '../schedulingmodule/schedule.service';
@NgModule({
  declarations: [EditingComponent,ListVoluteersComponent,],
  imports: [CommonModule,BrowserModule,RouterModule,ReactiveFormsModule,SchedulingModule],
  providers:[Voluteer,scheduleService]
})
export class ManagementVmoduleModule { }
