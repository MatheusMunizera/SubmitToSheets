import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitToSheetsComponent } from './submit-to-sheets.component';
import { AboutComponent } from '../../components/about/about.component';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [
    SubmitToSheetsComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    FormModule
  ],
  exports:[
   SubmitToSheetsComponent
  ]
})
export class SubmitToSheetsModule { }
