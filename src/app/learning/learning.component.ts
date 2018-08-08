import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  control: HTMLInputElement
  @ViewChild('newusername') newusername:ElementRef
  selectedBookElement:any
  constructor() { }

  ngOnInit() {
  }

  submitRegistration(inputControl: HTMLInputElement) {    
    this.control = inputControl    
  }

  submitRegistrationViewChild()
  {
    console.log(this.newusername);
  }
 
}
