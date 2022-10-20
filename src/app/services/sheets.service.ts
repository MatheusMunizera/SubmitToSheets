import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SheetsViewModel } from '../view-models/sheets.view-model';
import { FormsViewModel } from '../view-models/forms.view-model';


@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  private readonly SHEETS_URL = 'http://sheetsapi.matheusmuniz.dev/sheets';
  
 
  constructor(private http: HttpClient) {}


  public writeOnSheet(forms : FormsViewModel){
       
    const values = new SheetsViewModel(forms)
    const body=JSON.stringify(values);
    this.http.post(`${this.SHEETS_URL}`, body)
    .subscribe(res => res)
  }
  
   

}
