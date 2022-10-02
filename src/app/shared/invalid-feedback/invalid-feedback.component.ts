import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid-feedback, invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styleUrls: ['./invalid-feedback.component.css']
})
export class InvalidFeedbackComponent implements OnInit {

  @Input() message!: string ;
  constructor() { }

  ngOnInit(): void {
  }

}
