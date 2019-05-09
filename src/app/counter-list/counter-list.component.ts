import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';
import { ColossalCounterComponent } from '../colossal-counter/colossal-counter.component';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[];
  superCounters: SuperCounterComponent[];
  superDuperCounters: SuperDuperCounterComponent[];
  colossalCounters: ColossalCounterComponent[];
  prevCounters: number = 0;

  constructor() { 
    this.counters = [];
    this.superCounters = []
    this.superDuperCounters = []
    this.colossalCounters = []
  }

  addCounter() {
    if (this.counters.length === 6) {
      this.addPrevCounter()
      
      this.counters = []
      const superCounter = new SuperCounterComponent()
      this.superCounters.push(superCounter)
    } else {
      const counter: CounterDetailComponent = new CounterDetailComponent()
      this.counters.push(counter)
    }
    
    if (this.superCounters.length > 3) {
      this.superCounters = []
      const superDuperCounter = new SuperDuperCounterComponent()
      this.superDuperCounters.push(superDuperCounter)
    }

    if(this.superDuperCounters.length > 3) {
      this.superDuperCounters = []
      const colossalCounter = new ColossalCounterComponent()
      this.colossalCounters.push(colossalCounter)
    }
  }

  addPrevCounter() {

    const detailCounterRef = document.querySelectorAll(".counter")

    detailCounterRef.forEach((val)=>{
      this.prevCounters += Number(val.innerHTML)
    })
  }

  ngOnInit() {
  }

}