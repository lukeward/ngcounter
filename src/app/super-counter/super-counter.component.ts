import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() counter: number;
  
  constructor() { }

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
