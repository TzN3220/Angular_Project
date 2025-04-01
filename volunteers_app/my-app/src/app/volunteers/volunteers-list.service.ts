import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Volunteer } from "./volunteer.model";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class VolunteersListService {
  private _schedule: number[] = [];
  constructor(private _http: HttpClient, private _router: Router) {

  }

  public getVolunteers = (): Observable<Volunteer[]> => {
    return this._http.get<Volunteer[]>("/api/Volunteers");
  }


  getById = (id: number): Observable<Volunteer> => {
    return this._http.get<Volunteer>(`/api/Volunteers/${id}`);
  }

  saveVolunteerInServer = 
  (updated: Volunteer) => {
    let isScheduled = false;
    try {
      for (let i = 0; i < 7 && isScheduled == false; i++) {
        if (updated.wantArr[i] == false && this._schedule[i] == updated.id || (updated.wantArr[i] && updated.isActive == false)) {
          isScheduled = true;
          console.error("service::saveVolunteerInServer", updated, i + 1, "th day");
          throw new Error(`${updated.name} is scheduled already first remove the scheduling and after update`);
        }

      }
    } catch (error) {
      alert(`${updated.name} is scheduled already first remove the scheduling and after update`);

    }
    if (isScheduled == false) {
      this._http.put<Volunteer>(`/api/Volunteers/${updated?.id}`, updated).subscribe();
        this._router.navigate(["/volunteers"]);

    }
  }

  getSceduleToVolunteersService() {
    this._http.get<number[]>("/api/Scheduling").subscribe(data => this._schedule = data);
  }


  saveScedueInServer = (updatedSchedule: number) => {
    this._http.put("/api/Scheduling", updatedSchedule);
  }


}
