import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core'
import { country } from '../../model/country'

@Component({  selector: 'app-country',
  templateUrl: './country.component.html'  
})
export class CountryComponent implements OnInit 
{
  @Input()
  countryData: country[]

  @Output()
  countryChange:EventEmitter<number> = new EventEmitter<number>();
  
  selectedCountry:country;

  constructor() {

  }

  ngOnInit() {

  }

  changeCountry(event) {

    this.countryChange.emit(event.target.value);    
  }

}
