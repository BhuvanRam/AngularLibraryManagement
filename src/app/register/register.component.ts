import { Component, OnInit } from '@angular/core';
import { city } from '../../model/city';
import { state } from '../../model/state';
import { country } from '../../model/country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  selectedCountryId: number;
  selectedStateId: number;
  stateData: state[];
  cityData: city[];
  
  countryData:country[] = [      
    { 'countryid': 2, 'country': 'Russia' },
    { 'countryid': 1, 'country': 'India' },
    { 'countryid': 3, 'country': 'Singapore' },
    { 'countryid': 4, 'country': 'South Africa' }
  ];

  constructor() {

  }

  ngOnInit() {

  }

  countryChanged(countryid) {    
    this.selectedCountryId = countryid;
    this.stateData = [
      { 'countryid': 1, 'stateid': 1, 'statename': 'Telangana' },
      { 'countryid': 1, 'stateid': 2, 'statename': 'Andhra Pradesh' },
      { 'countryid': 1, 'stateid': 3, 'statename': 'Tamil Nadu' },
      { 'countryid': 1, 'stateid': 4, 'statename': 'Karnataka' },
      { 'countryid': 2, 'stateid': 5, 'statename': 'Ukraine' },
      { 'countryid': 2, 'stateid': 6, 'statename': 'Belarus' },      
      { 'countryid': 3, 'stateid': 7, 'statename': 'Downtown Core' },
      { 'countryid': 3, 'stateid': 8, 'statename': 'Marina East' },
      { 'countryid': 4, 'stateid': 9, 'statename': 'Eastern Cape' },
      { 'countryid': 4, 'stateid': 10, 'statename': 'Northern Cape' },
    ];
    
    this.stateData = this.stateData.filter(p => p.countryid == this.selectedCountryId);
    this.cityData = [];
  }


  stateChanged(stateid) {
    this.selectedStateId = stateid;
    
    this.cityData = [
      { 'stateid': 1, 'cityid': 1, 'cityname': 'Hyderabad' },
      { 'stateid': 2, 'cityid': 2, 'cityname': 'Vizag' },
      { 'stateid': 3, 'cityid': 3, 'cityname': 'Chennai' },      
      { 'stateid': 4, 'cityid': 4, 'cityname': 'Banglore' },
      { 'stateid': 5, 'cityid': 5, 'cityname': 'Lviv' },      
      { 'stateid': 6, 'cityid': 6, 'cityname': 'Minsk' },
      { 'stateid': 7, 'cityid': 7, 'cityname': 'Marina Bay' },
      { 'stateid': 8, 'cityid': 8, 'cityname': 'Marina East Local' },
      { 'stateid': 9, 'cityid': 9, 'cityname': 'Eastern' },
      { 'stateid': 10, 'cityid': 10, 'cityname': 'Northern' },
    ];

    this.cityData = this.cityData.filter(p => p.stateid == this.selectedStateId);
  }
}
