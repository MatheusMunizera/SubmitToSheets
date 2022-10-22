import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { AddressViewModel } from '../view-models/address.view-model';

@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  private readonly VIACEP_URL = 'https://viacep.com.br/ws/';
  
  constructor(private http: HttpClient) {}

  public queryCEP(cep: string) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });

    return this.http.get(`${this.VIACEP_URL}${cep}/json`, { headers: headers });
  }

  ExistsCEPValidate() {

    return (control: AbstractControl) => {

      const address = control['_parent']['controls']['address']; 
      const district = control['_parent']['controls']['district']; 
      const city = control['_parent']['controls']['city']; 

      return control.valueChanges.pipe(
        map((cep) => {
          this.queryCEP(cep).subscribe({
            error: (err) => {
              address.setValue("")
                district.setValue("")
                city.setValue("")
              control.setErrors({ cep: true });
              return { cep: true };
            },
            next: (data : AddressViewModel ) => {
              if (data && !data.hasOwnProperty('erro')) {
                address.setValue(data?.logradouro)
                district.setValue(data?.bairro)
                city.setValue(data?.localidade)
                control.setErrors(null);

                return null;
              } else {
                address.setValue("")
                district.setValue("")
                city.setValue("")
                control.setErrors({ cep: true });
                return { cep: true };
              }
            },
          });
        })
      );
    };
   }

   
   
}
