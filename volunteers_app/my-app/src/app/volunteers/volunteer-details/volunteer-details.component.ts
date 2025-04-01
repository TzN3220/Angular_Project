import { Component, OnInit } from '@angular/core';
import { VolunteersListService } from '../volunteers-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Volunteer } from '../volunteer.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {
  id?: number;
  volunteerToEdit: Volunteer = new Volunteer();
  EditVolunteer: FormGroup = new FormGroup({});
  scedule?: boolean[];
  formGroupIsInitilized: boolean = false;
  constructor(private _volunteersListService: VolunteersListService, private _acr: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.formGroupIsInitilized = false;
    this.id = +(this._acr.snapshot.paramMap.get('id') ?? '');
    this._volunteersListService.getById(this.id).subscribe(v => {
      this._volunteersListService.getSceduleToVolunteersService();
      this.volunteerToEdit = v;
      this.EditVolunteer = new FormGroup({
        name: new FormControl(this.volunteerToEdit?.name, [Validators.minLength(2), Validators.required]),
        address: new FormControl(this.volunteerToEdit?.address, [Validators.minLength(10), Validators.required]),
        tel: new FormControl(this.volunteerToEdit?.tel, [Validators.minLength(9), Validators.required]),
        isActive: new FormControl(this.volunteerToEdit?.isActive),
        wantArr: new FormControl(this.volunteerToEdit?.wantArr),
        wantArrSunday: new FormControl(this.volunteerToEdit?.wantArr[0]),
        wantArrMonday: new FormControl(this.volunteerToEdit?.wantArr[1]),
        wantArrTuesday: new FormControl(this.volunteerToEdit?.wantArr[2]),
        wantArrWednesday: new FormControl(this.volunteerToEdit?.wantArr[3]),
        wantArrThursday: new FormControl(this.volunteerToEdit?.wantArr[4]),
        wantArrFriday: new FormControl(this.volunteerToEdit?.wantArr[5]),
        wantArrMozaeyShabat: new FormControl(this.volunteerToEdit?.wantArr[6]),

      }
      );
      this.formGroupIsInitilized = true;
    }
    );
  }
  //how to convert EditVolunteer to volunteer?
  saveVoluteer = () => {
    // this.volunteerToEdit.wantArr=[this.EditVolunteer.controls('wantArrSunday').value,]
    this.volunteerToEdit.wantArr[0] = this.EditVolunteer.controls['wantArrSunday'].value;
    this.volunteerToEdit.wantArr[1] = this.EditVolunteer.controls['wantArrMonday'].value;
    this.volunteerToEdit.wantArr[2] = this.EditVolunteer.controls['wantArrTuesday'].value;
    this.volunteerToEdit.wantArr[3] = this.EditVolunteer.controls['wantArrWednesday'].value;
    this.volunteerToEdit.wantArr[4] = this.EditVolunteer.controls['wantArrThursday'].value;
    this.volunteerToEdit.wantArr[5] = this.EditVolunteer.controls['wantArrFriday'].value;
    this.volunteerToEdit.wantArr[6] = this.EditVolunteer.controls['wantArrMozaeyShabat'].value;
    this.volunteerToEdit.name = this.EditVolunteer.controls['name'].value;
    this.volunteerToEdit.tel = this.EditVolunteer.controls['tel'].value;
    this.volunteerToEdit.address = this.EditVolunteer.controls['address'].value;
    this.volunteerToEdit.isActive = this.EditVolunteer.controls['isActive'].value;
   


    this._volunteersListService.getSceduleToVolunteersService();
    // forSave:Volunteer=new Volunteer(updated.id,updated.name,updated.address,updated.tel,
    //[updated.wantArrSunday,updated.wantArrMonday,updated.wantArrTuesday,updated.wantArrWednesdayday,updated.wantArrThursday,updated.wantArrFriday,updated.wantArrMozaeyShabat]);

    this._volunteersListService.saveVolunteerInServer(this.volunteerToEdit);
    // .subscribe(data => console.log("saved", data)



  }
}
