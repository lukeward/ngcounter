import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  counter: number;
  constructor() { 
    this.counter = 0
  }

  increment() {
    this.counter += 3
  }

  decrement() {
    if (this.counter > 2) {
      this.counter -= 3
    }
  }

  ngOnInit() {
  }

}
