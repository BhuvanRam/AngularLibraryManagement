import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { state } from '../../model/state';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html'
})
export class StateComponent implements OnInit {
  
  
  @Input()
  stateData: state[];



  @Output()
  stateChange: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
    
  }

  stateChanged(event) {
    this.stateChange.emit(event.target.value);
  }


}
