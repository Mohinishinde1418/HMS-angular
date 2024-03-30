import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  loginData(data:any){
    console.log(data.value);
    console.log(data.value.username);
    console.log(data.value.password);
    if(data.value.username=="Techrel" && data.value.password=="Techrel@123"){
      this.router.navigate(['/DASHBOARD']);
    }else{
      alert("Invalid username and password");
    }
    
  }
}
