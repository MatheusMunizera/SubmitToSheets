import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SheetsViewModel } from '../view-models/sheets.view-model';
import { FormsViewModel } from '../view-models/forms.view-model';
import { StatusCodeResponseViewModel } from '../view-models/status-code.view-model';
import { environment } from '../../environments/environment';
import { PersonViewModel } from '../view-models/person.view-model';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {
  private readonly SCRAPER_URL = environment.SCRAPER_API;

  
  constructor(private http: HttpClient) {}


  public getPerson(){
    return this.http.get<PersonViewModel>(`${this.SCRAPER_URL}scraper/generate/person`)
  }
}
