import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  appointmentId:any;
  feedback:any;
  flag=false;



  constructor() { }

  ngOnInit(): void {
  }


  onSubmitClick(){
    this.flag=true;

  }

}
