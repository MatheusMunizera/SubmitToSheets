import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackModule } from 'src/app/shared/invalid-feedback/invalid-feedback.module';



@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvalidFeedbackModule
  ],
  exports:[
    FormComponent
  ]
})
export class FormModule { }
