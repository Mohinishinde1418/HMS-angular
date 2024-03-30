import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  photoArr:any=[
    {path:'https://www.piramalrevanta.com/wp-content/uploads/2022/09/20220906-article-banner-01.jpg'},
    {path:'https://www.healthcare-management-degree.net/wp-content/uploads/2020/08/Are-Non-Profit-or-For-Profit-Hospitals-Better-1.jpg'},
    {path:'https://www.breachcandyhospital.org/sites/default/files/123123-compressed_0.jpg'},
    {path:'https://www.kane.com.au/assets/_projectSlide/Northern-Hospital-Stage-2-Finals-25.JPG'},
    {path:'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80'},
    {path:'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?cs=srgb&dl=pexels-pixabay-247786.jpg&fm=jpg'},
    {path:'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?cs=srgb&dl=pexels-vidal-balielo-jr-1250655.jpg&fm=jpg'},
    {path:'https://watermark.lovepik.com/photo/20211210/large/lovepik-operating-room-doctor-doing-surgical-surgery-picture_501781852.jpg'}
  ];
  ngOnInit(): void {
  }

}
