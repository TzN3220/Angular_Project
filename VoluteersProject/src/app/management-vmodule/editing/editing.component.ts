import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voluteer } from '../voluteer.model';
import { FormControl, FormGroup } from '@angular/forms';
import { VoluteerService } from '../voluteer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { scheduleService } from 'src/app/schedulingmodule/schedule.service';


@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingComponent{
   
   constructor(private _acr: ActivatedRoute,private volunteerService:VoluteerService,private router:Router,private _scheduleService:scheduleService){
    this._vform=JSON.parse(_acr.snapshot.paramMap.get('voluteer') ?? '');
    this.volunteerForm=new FormGroup({
      "id":new FormControl(this._vform?.id),
      "first_name":new FormControl(this._vform?.first_name),
      "last_name":new FormControl(this._vform?.last_name),
      "Sunday":new FormControl(this._vform?.days_work[0]),
      "Monday":new FormControl(this._vform?.days_work[1]),
      "Tuesday":new FormControl(this._vform?.days_work[2]),
      "Wednesday":new FormControl(this._vform?.days_work[3]),
      "Thursday":new FormControl(this._vform?.days_work[4])
    })
  }
  private _vform:Voluteer;
  private days:number[]=[]; 
  volunteerForm: FormGroup = new FormGroup({});
  public get vfrom():Voluteer|undefined{
         return this._vform;
  }
saveStudentServer=():void=>{
      if(this._vform!=undefined){
      this._vform.id=this.volunteerForm.controls['id'].value;
      this._vform.first_name=this.volunteerForm.controls['first_name'].value;
      this._vform.last_name=this.volunteerForm.controls['last_name'].value;
      this._vform.days_work[0]=this.volunteerForm.controls["Sunday"].value;
      this._vform.days_work[1]=this.volunteerForm.controls['Monday'].value;
      this._vform.days_work[2]=this.volunteerForm.controls['Tuesday'].value;
      this._vform.days_work[3]=this.volunteerForm.controls['Wednesday'].value;
      this._vform.days_work[4]=this.volunteerForm.controls['Thursday'].value;
      this._scheduleService?.getSchedule().subscribe(data=>{
        this.days=data;
        if(this._vform!=undefined){
          if(this.days[0]==this.vfrom?.id&&this.vfrom.days_work[0]==false){
            console.log("i cant send");
            return;
          }
          if(this.days[1]==this.vfrom?.id&&this.vfrom.days_work[1]==false){
            console.log("i cant send");
            return;
          }
          if(this.days[2]==this.vfrom?.id&&this.vfrom.days_work[2]==false){
            console.log("i cant send");
            return;
          }
          if(this.days[3]==this.vfrom?.id&&this.vfrom.days_work[3]==false){
            console.log("i cant send");
            return;
          }
          if(this.days[4]==this.vfrom?.id&&this.vfrom.days_work[4]==false){
            console.log("i cant send");
            return;
          }
          else{
            console.log("send!!");
          }
        }
      });
      this.volunteerService.putVolunteerToServer(this._vform).subscribe(data=>{console.log(data)},error=>{console.log(error)});
      this.router.navigate(['/volunteer']);      
    }
    else{
       console.log("undefined");
    } 
  }
}
