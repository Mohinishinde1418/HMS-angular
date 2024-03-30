import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
   contactUsArr:any=[
    {
      label:'Enter Full Name',
      type:'text',
      placeholder:'Enter Full Name'
    },
    {
      label:'Enter Email',
      type:'email',
      placeholder:'Enter  Email'
    },
    {
      label:'Enter Contact Noumnber',
      type:'number',
      placeholder:'Enter Contact Noumnber'
    }
   ]
  ngOnInit(): void {
  }

}
