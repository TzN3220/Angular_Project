import { Component, OnInit } from '@angular/core';
import { scheduleService } from '../schedule.service';
import { Voluteer } from 'src/app/management-vmodule/voluteer.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { VoluteerService } from 'src/app/management-vmodule/voluteer.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent  {
  listVolunteer:Voluteer[]=[];
  days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday"];
  flag?:boolean;
  private finallyDays:number[]=[];
  constructor(private _scheduleService:scheduleService,private voluteerService:VoluteerService) {  }
  schedulingForm:FormGroup=new FormGroup({
    volunteers: new FormArray([
      new FormControl(this.days[0]),
      new FormControl(this.days[1]),
      new FormControl(this.days[2]),
      new FormControl(this.days[3]),
      new FormControl(this.days[4])
     ])
  });
  ngOnInit():void{
    this.voluteerService.getVolunteerFromServer().subscribe(data=>{
      this.listVolunteer=data;
      this.flag=true;
    })
  }
  get volunteers(): FormArray {
    return this.schedulingForm.get('volunteers') as FormArray;
  }

  volunteerdays(day:number):Voluteer[]{
    // return this._scheduleService.getAllVolunteerByDay(day);
    
    return this.listVolunteer.filter(v=>v.days_work[day]==true);
  }
  sendToServer(){
    for(let i=0;i<5;i++){
    this.finallyDays[i]=this.volunteers.controls[i].value;
  }
    this._scheduleService.putOnServer(this.finallyDays);
  }
}
