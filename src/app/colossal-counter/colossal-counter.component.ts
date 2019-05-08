import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colossal-counter',
  templateUrl: './colossal-counter.component.html',
  styleUrls: ['./colossal-counter.component.css']
})
export class ColossalCounterComponent implements OnInit {
  counter: number;
  
  constructor() {
    this.counter = 0
   }

   startCounter() {
     setInterval(() => {
        this.counter += 2
     }, 1000)
   }

  ngOnInit() {
  }

}
