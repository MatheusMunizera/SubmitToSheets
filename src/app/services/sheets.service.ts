import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SheetsViewModel } from '../view-models/sheets.view-model';
import { FormsViewModel } from '../view-models/forms.view-model';


@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  private readonly SHEETS_URL = 'https://sheetsapi.matheusmuniz.dev/sheets';
  
 
  constructor(private http: HttpClient) {}


  public writeOnSheet(forms : FormsViewModel){
const teste = {
  "name": "Matheus Muniz Dantas",
  "birthdate": "01/05/2001",
  "gender": "MALE",
  "sign": "Touro",
  "cpf": 19497567340,
  "rg": "27058665X",
  "father": "Daniel Alexandre Lorenzo da Mota",
  "mother": "Antônia Camila",
  "email": "matheus.munizera@gmail.com",
  "cep": "60181210",
  "address": "Rua Ponta Mar",
  "number": "113",
  "district": "Vicente Pinzon",
  "city": "Fortaleza",
  "phone": 85983187119,
  "height": "1,82",
  "weight": "86",
  "blood": "A+",
  "color": "vermelho"
}
const teste2= new SheetsViewModel(forms)
    this.http.post(`${this.SHEETS_URL}`, teste).subscribe(res => console.log(res))
  }
  
   

}
