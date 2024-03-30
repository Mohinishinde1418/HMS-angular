import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  constructor( private api:ApiService) { }
  plist:any;
  ngOnInit(): void {
    this.api.selectAllRecord().subscribe((res)=>{
      this.plist=res;
    })
  }


  holdIdVar:any;
  holdId(id:any){
    alert(id);
    this.holdIdVar=id;
  }

  Mdata(data:any){
   let obj={medical:data.value.pmedical,pid:this.holdIdVar};
    this.api.updateByMedical(obj).subscribe((res)=>{
      console.log('Data send to updata');
    })
    console.log(obj);
  }

}
