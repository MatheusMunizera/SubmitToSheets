import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SheetsViewModel } from '../view-models/sheets.view-model';
import { FormsViewModel } from '../view-models/forms.view-model';
import { StatusCodeResponseViewModel } from '../view-models/status-code.view-model';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  private readonly SHEETS_URL = environment.api;

  
  constructor(private http: HttpClient) {}


  public writeOnSheet(forms : FormsViewModel, ){
    const values = new SheetsViewModel(forms)
    return this.http.post<StatusCodeResponseViewModel>(`${this.SHEETS_URL}sheets`, JSON.stringify(values))
  }
  
   

}
