import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor( private api:ApiService) { }
  id:any;
  fullData:any;

  ngOnInit(): void {
    this.id=localStorage.getItem('pid');
    this.getFulldata();
  }

 total:any;

    getFulldata(){
      let obj={pid:this.id};
      this.api.select_one(obj).subscribe((res)=>{
        this.fullData=res;
        // let mp=this.fullData[0].medical;
        // let dp=400;
        // this.total=mp+dp;

      })
    }
  print1(){
    window.print();
  }

}
