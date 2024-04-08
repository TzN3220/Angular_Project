import { Injectable } from "@angular/core";
import { Voluteer } from "./voluteer.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class VoluteerService{
    constructor(private _http:HttpClient){}
   
    getVolunteerFromServer = (): Observable<Voluteer[]> => {
        return this._http.get<Voluteer[]>("/api/voluteer");
    }
    putVolunteerToServer=(v:Voluteer):Observable<Voluteer[]>=>{
        console.log("in put")
        return this._http.put<Voluteer[]>("/api/voluteer",v);
    }
}