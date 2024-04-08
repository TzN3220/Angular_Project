import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VoluteerService } from '../voluteer.service';
import { Voluteer } from '../voluteer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-voluteers',
  templateUrl: './list-voluteers.component.html',
  styleUrls: ['./list-voluteers.component.css']
 
})
export class ListVoluteersComponent{
  constructor(private volunteerService:VoluteerService,private router:Router) {
    volunteerService.getVolunteerFromServer().subscribe( data => {
      this.listVolunteers=data; 
     },error=>{console.log("not good/////")}
    )
  }
  listVolunteers:Voluteer[]=[];
  @Input()
    vToEdit?:Voluteer;
  ToEdit(v:Voluteer){
    let v1=this.listVolunteers.find(x=>x.id==v.id);
    return v1;
  }
  editingvoluteer(volunteer:Voluteer){
    this.vToEdit=volunteer;
    this.router.navigate(['/edit',{voluteer:JSON.stringify(volunteer)}])
  }
}

