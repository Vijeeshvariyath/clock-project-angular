import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  second = 0;
  minute = 0;
  hour = 0;
  d: Date | undefined; 

  ngOnInit(){
    setInterval(()=>{


    this.d=new Date();
    this.second=this.d.getSeconds()*6;
    this.minute=this.d.getMinutes()*6;
    this.hour=this.d.getHours()*30+Math.round(this.minute/12)
  },1000)
  }
}
