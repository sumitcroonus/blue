import { Component ,OnInit} from '@angular/core';
import { PatientsapiService } from '../patientsapi.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  patientArray:any=[];
  patientById:any=[];
  patientByIdService:any=[];
  color:any='rgb(203,227,255)'
  
  hide:boolean=true;
  
  constructor(private api:PatientsapiService){}
  
  ngOnInit(): void {
  this.patientArray=this.api.getData()
  }

  getBill(id:any){
    this.hide=false;
    this.color='white';
    this.patientById=this.api.getPatient(id);
    this.patientByIdService=this.patientById[0].service
  }

  appointment(){
    alert("Appointment Made !");
  }

  addPatient(){
    alert("Pattient added !");
  }

  notification(){
    alert("No notifications to show");
  }

}
