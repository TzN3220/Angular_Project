import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { Scheduling } from "./Scheduling.model";
import { Observable, count } from "rxjs";
import { Voluteer } from "../management-vmodule/voluteer.model";

@Injectable()
export class scheduleService{
    volunteers:Voluteer[]=[];
    constructor(private _http:HttpClient){
        this._http.get("api/voluteer").subscribe(data=>{
            console.log(data);
            this.volunteers=<Voluteer[]>data;
             },error=>{
                console.log(error);
            });
    }
    
    cvolunteers:Voluteer[]=[];
    getSchedule=():Observable<number[]>=>{
        console.log("wow");
        return this._http.get<number[]>("api/Scheduling");
    }
    putOnServer=(days:number[])=>{
        console.log("way to put")
         this._http.put<number[]>("api/Scheduling",days);
    }
    getAllVolunteerByDay=(_day:number):Voluteer[]=>{
        return this.volunteers.filter(x=>{
            x.days_work[_day]==true;
        }) ;  
    }
    

}