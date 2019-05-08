import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  counter: number;
  constructor() { 
    this.counter = 0;
  }

  startCounter() {
    setInterval(() => {
      this.counter += 1
    }, 1000)
  }

  ngOnInit() {
  }

}
