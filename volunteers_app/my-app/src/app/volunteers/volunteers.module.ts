import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteersListService } from './volunteers-list.service';
import { RouterModule, Route } from '@angular/router';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { ReactiveFormsModule } from '@angular/forms';
const VOLUNTEERS_ROUTES: Route[] = [
  { path: "volunteerDetails", component:VolunteerDetailsComponent }
]

@NgModule({
  declarations: [
    VolunteersListComponent,
    VolunteerDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(VOLUNTEERS_ROUTES),
    ReactiveFormsModule
  ],
  exports: [VolunteersListComponent],
  providers: [VolunteersListService]
})
export class VolunteersModule { }
