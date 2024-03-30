import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {

  constructor( private api:ApiService) { }

  ngOnInit(): void {
  }
  pForm(data:any){
    console.log(data.value);
    this.api.insertRecord(data.value).subscribe((res)=>{
      console.log("Form Data has been sent ...!");
    })
  }

}
