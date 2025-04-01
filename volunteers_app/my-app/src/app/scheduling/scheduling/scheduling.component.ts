import { Component, OnInit } from '@angular/core';
import { schedulingService } from '../schedulingService';
import { Volunteer } from 'src/app/volunteers/volunteer.model';
import { FormControl, FormGroup } from '@angular/forms';
import { VolunteersListComponent } from 'src/app/volunteers/volunteers-list/volunteers-list.component';
import { VolunteersListService } from 'src/app/volunteers/volunteers-list.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {
  allVolunteers: Volunteer[] = [];
  isInit: boolean = false;

  // Sunday: Volunteer[] = [];
  // Monday: Volunteer[] = [];
  // Tuesday: Volunteer[] = [];
  // Wednesay: Volunteer[] = [];
  // Thursday: Volunteer[] = [];
  // Friday: Volunteer[] = [];
  // MozaeyShabat: Volunteer[] = [];
  editSchedule: FormGroup = new FormGroup({});
  schedule: number[] = [];
  constructor(private _scheduleService: schedulingService, private _volunteersService: VolunteersListService) {
  }
  ngOnInit() {
    this.isInit = false;
    this._volunteersService.getVolunteers().subscribe(data => {
      this.allVolunteers = data;
      this._scheduleService.getSchedule().subscribe(data => {
        this.schedule = data;
        this.editSchedule = new FormGroup({
          SundayControl: new FormControl(this.schedule[0]),
          MondayControl: new FormControl(this.schedule[1]),
          TuesdayControl: new FormControl(this.schedule[2]),
          WednesdayControl: new FormControl(this.schedule[3]),
          ThursdayControl: new FormControl(this.schedule[4]),
          FridayControl: new FormControl(this.schedule[5]),
          MozaeyShabatControl: new FormControl(this.schedule[6])
        });
        this.isInit = true;

      });
    })
  }
  public getOptionalVolunteers(day: number): Volunteer[] {
    let res = this.allVolunteers.filter(v => (v.wantArr[day - 1] && v.isActive));
    return res;
  }
  daysOfWeek: string[] =
    ["Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "MozaeyShabat"]

  public saveScheduling() {
    this.schedule[0] = this.editSchedule.controls['SundayControl'].value;
    this.schedule[1] = +this.editSchedule.get('MondayControl')?.value;
    this.schedule[2] = +this.editSchedule.get('TuesdayControl')?.value;
    this.schedule[3] = +this.editSchedule.get('WednesdayControl')?.value;
    this.schedule[4] = this.editSchedule.get('ThursdayControl')?.value;
    this.schedule[5] = this.editSchedule.get('FridayControl')?.value;
    this.schedule[6] = this.editSchedule.get('MozaeyShabatControl')?.value;

    //   for (let i = 0; i < this.schedule.length; i++) {
    //   if (this.schedule[i] = NaN ) {
    //     this.schedule[i] = 0;
    //   }
    // }

    this._scheduleService.saveSchedule(this.schedule);

  }
}
