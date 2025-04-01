import { Injectable } from "@angular/core";
import { Volunteer } from "../volunteers/volunteer.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { VolunteersListService } from "../volunteers/volunteers-list.service";


@Injectable()
export class schedulingService {
    allVolunteers: Volunteer[] = [];
    constructor(private _http: HttpClient, private _volunteersService: VolunteersListService) {

    }


    public getSchedule = (): Observable<number[]> => {
        return this._http.get<number[]>("/api/Scheduling");
    }

    public saveSchedule(updated: number[]) {
        this._http.put("/api/Scheduling", updated).subscribe();
    }

    public getVolunteers() {
        this._volunteersService.getVolunteers().subscribe(data => this.allVolunteers = data);
    }

    
   

}