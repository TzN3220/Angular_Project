import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { VolunteersModule } from '../volunteers.module';
import { VolunteersListService } from '../volunteers-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.scss']
})
export class VolunteersListComponent implements OnInit {
  allVolunteers: Volunteer[] = [];
  constructor(private _volunteersListService: VolunteersListService, private _router: Router) {

  }

  ngOnInit() {
    this._volunteersListService.getSceduleToVolunteersService();
    this._volunteersListService.getVolunteers().subscribe(volunteers => {
      this.allVolunteers = volunteers;
      
    });
  }
  
  routeToEdit(id:number) {
  this._router.navigate(['/volunteerDetails',{id:id}]);
  }

}


