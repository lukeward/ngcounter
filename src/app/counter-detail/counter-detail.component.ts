import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  counter: number;
  
  constructor() { 
    this.counter = 0;
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter -= 1;  
    }  
  }

  decrementButtonConfig() {
    if (this.counter == 0) {
      const counterRef = document.querySelector('.decrement')
      counterRef.className = "decrement-disabled"
    } else {
      const counterRef = document.querySelector('.decrement-disabled')
      counterRef.className = "decrement"
    }
  }

  ngOnInit() {
  }

}
