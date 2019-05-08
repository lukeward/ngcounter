import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[];
  superCounters: SuperCounterComponent[];
  superDuperCounters: SuperDuperCounterComponent[];

  constructor() { 
    this.counters = [];
    this.superCounters = []
    this.superDuperCounters = []
  }

  addCounter() {
    const counter: CounterDetailComponent = new CounterDetailComponent()
    this.counters.push(counter)

    if (this.counters.length === 6) {

      this.counters = []
      const superCounter = new SuperCounterComponent()
      this.superCounters.push(superCounter)
    }
    
    if (this.superCounters.length === 3) {
      this.superCounters = []
      const superDuperCounter = new SuperDuperCounterComponent()
      this.superDuperCounters.push(superDuperCounter)
    }
  }

  ngOnInit() {
  }

}