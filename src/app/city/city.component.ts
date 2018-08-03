import { Component, OnInit, Input } from '@angular/core';
import { city } from '../../model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'  
})
export class CityComponent implements OnInit {
  
  @Input()
  cityData: city[];
  
  constructor() {

  }

  ngOnInit() {
    
  }

}
