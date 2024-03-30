import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  selectAllRecord(){
    return this.http.get('http://localhost:8000/select')
  }
  insertRecord(data:any){
    return this.http.post('http://localhost:8000/insert',data);
  }

  updateByDoctor(data:any){
    return this.http.post('http://localhost:8000/updateByDoctor',data);
  }

  updateByMedical(data:any){
    return this.http.post('http://localhost:8000/updateByMedical',data);
  }

  updateByAccount(data:any){
    return this.http.post('http://localhost:8000/updateByAccount',data);
  }

  select_one(data:any){
    return this.http.post('http://localhost:8000/select_one',data);
  }


}
