import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( private router:Router, private api:ApiService) { }
  
  list:any;
  ngOnInit(): void {
    this.api.selectAllRecord().subscribe((res)=>{
      this.list=res;
    })
  }

  holdIdVar:any;
  holdId(id:any){
    this.holdIdVar=id;
  }

  holdIdForPreviewVar:any;
  holdIdForPreview(id:any){
    localStorage.setItem('pid',id);
    this.holdIdForPreviewVar=id;
    this.router.navigate(['/PREVIEW']);
  }


  Mdata(data:any){
    console.log(data.value);
    let obj={account:data.value.pmedical,pid:this.holdIdVar};
    this.api.updateByAccount(obj).subscribe((res)=>{
      console.log('Data send to updata');
    })
    console.log(obj);
  }

 

}
