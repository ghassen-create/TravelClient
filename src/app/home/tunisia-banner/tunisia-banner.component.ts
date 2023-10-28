import { Component } from '@angular/core';

@Component({
  selector: 'app-tunisia-banner',
  templateUrl: './tunisia-banner.component.html',
  styleUrls: ['./tunisia-banner.component.css']
})
export class TunisiaBannerComponent {
  fruits=[
    {
    path:"assets/TokyoPic.jpg",title:"Tokyo",
    des:"Tokyo, a vibrant metropolis where tradition and modernity harmoniously coexist."
  } ,
    {
    path:"assets/ParisPic.jpg",title:"Paris",
    des:"Tokyo, a vibrant metropolis where tradition and modernity harmoniously coexist."
  } ,
    {
    path:"assets/LondonPic.jpg",title:"London",
    des:"Tokyo, a vibrant metropolis where tradition and modernity harmoniously coexist."
  } ,
    {
    path:"assets/GenevePic.jpg",title:"Genève",
    des:"Tokyo, a vibrant metropolis where tradition and modernity harmoniously coexist."
  } ,
]

}
