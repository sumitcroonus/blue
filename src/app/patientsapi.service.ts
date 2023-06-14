import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsapiService {

  constructor() { }

  patients:any=[
    {
      "id":1,
      "name":"Sumit Chaugale",
      "age":"25, Male",
      "date":"02/02/2023, 06:23PM",
      "bill":"321546",
      "receipt":"0123456789",
      "service":[
        {
        "id":1,
        "name":"Consultation",
        "price":"500",
        "quantity":"1"
        },
        {
        "id":2,
        "name":"XRay",
        "price":"1500",
        "quantity":"2"
        },
    ]
    },
    {
      "id":2,
      "name":"Tejas Shewale",
      "age":"20, Male",
      "date":"10/02/2023, 06:23PM",
      "bill":"548546",
      "receipt":"2657456789",
      "service":[
        {
        "id":1,
        "name":"Sonography",
        "price":"1500",
        "quantity":"2"
        },
        {
        "id":2,
        "name":"Consultation",
        "price":"500",
        "quantity":"1"
        },
    ]
    },
    {
      "id":3,
      "name":"Yukta Harhare",
      "age":"20, Female",
      "date":"02/03/2023, 06:23PM",
      "bill":"985546",
      "receipt":"1546456789",
      "service":[
        {
        "id":1,
        "name":"Sonography",
        "price":"5000",
        "quantity":"1"
        },
        {
        "id":2,
        "name":"XRay",
        "price":"750",
        "quantity":"1"
        },
    ]
    },
    {
      "id":4,
      "name":"Aditya Pawar",
      "age":"26, Male",
      "date":"03/02/2023, 06:23PM",
      "bill":"451546",
      "receipt":"7593456789",
      "service":[
        {
        "id":1,
        "name":"Consultation",
        "price":"500",
        "quantity":"1"
        },
        {
        "id":2,
        "name":"Consultation",
        "price":"1000",
        "quantity":"2"
        },
    ]
    }
  ]

  getData(){
    return this.patients;
  }
  getPatient(Id:any){
    return this.patients.filter((obj:any)=>{
      return obj.id==Id;
    })
  }
}
