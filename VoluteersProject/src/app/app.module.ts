import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListVoluteersComponent } from './management-vmodule/list-voluteers/list-voluteers.component';
import { HttpClient } from "@angular/common/http";
import { CommonModule } from '@angular/common';  
import { Route, RouterModule, Routes } from '@angular/router';
import { VoluteerService } from './management-vmodule/voluteer.service';
import { ManagementVmoduleModule } from './management-vmodule/management-vmodule.module';
import { EditingComponent } from './management-vmodule/editing/editing.component';
import { ScheduleComponent } from './schedulingmodule/schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { scheduleService } from './schedulingmodule/schedule.service';


const ROUTERS:Route[]=[
  {path:"home",component: AppComponent},
  {path:"volunteer",component: ListVoluteersComponent},
  {path:"edit",component:EditingComponent},
  {path:"schedule",component:ScheduleComponent}
]; 
@NgModule({
  declarations: [AppComponent],
  imports: [ManagementVmoduleModule,AppRoutingModule,CommonModule,HttpClientModule,RouterModule.forRoot(ROUTERS,{useHash:true}),BrowserModule,ReactiveFormsModule],
  providers: [VoluteerService,scheduleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
