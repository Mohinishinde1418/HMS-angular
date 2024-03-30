import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor( private api:ApiService) { }
  dummy:any;

  ngOnInit(): void {
    this.api.selectAllRecord().subscribe((res)=>{
      this.dummy=res;
    })
  }

 holdIdVar:any;
  holdId(id:any){
    this.holdIdVar=id;
  }

  Mdata(data:any){
    let obj={pmedical:data.value.pmedical,pid:this.holdIdVar};
    this.api.updateByDoctor(obj).subscribe((res)=>{
      console.log('Data send to updata');
    })
    console.log(obj);
  }

}
