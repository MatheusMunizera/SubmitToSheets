import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, first, map, switchMap } from 'rxjs';
import { AddressViewModel } from '../view-models/address.view-model';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  private readonly VIACEP_URL = "https://viacep.com.br/ws/" 
  public AddressInfo  = new BehaviorSubject<AddressViewModel>({});

  constructor(private http : HttpClient) {  
  }

  private queryCEP(cep : string){
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
    console.log(cep)
    return this.http.get(`${this.VIACEP_URL}0${cep}/json`, {headers: headers})
  }

  validateCEPInput(){


    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((cep) =>
          this.queryCEP(cep)
           

        
        ),
        map((data) => 
        (data ? {cep: true} : null)
        ),
        first()
      );
    };
  }

}
