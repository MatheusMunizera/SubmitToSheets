import { BloodEnum } from "./enum/blood.enum";
import { GenderEnum } from "./enum/gender.enum";
import { FormsViewModel } from "./forms.view-model";

export class SheetsViewModel {
    
    constructor(forms : FormsViewModel) {
      this.name = forms.name;
      this.birthdate = forms.birthdate;
      this.age = forms.age
      this.gender = GenderEnum[forms.gender as keyof typeof GenderEnum]
      this.sign = forms.sign;
      this.cpf = +forms.cpf;
      this.rg = forms.rg;
      this.father = forms.father; 
      this.mother = forms.mother;
      this.email = forms.email;
      this.cep = forms.cep;
      this.address = forms.address;
      this.number = forms.number;
      this.district = forms.district;
      this.city = forms.city;
      this.phone = +forms.phone;
      this.height = forms.height;
      this.weight = forms.weight;
      this.blood = BloodEnum[forms.blood as keyof typeof BloodEnum]
      this.color = forms.color;
    }

    name: string;
    birthdate: Date;
    age: number;
    gender: GenderEnum;
    sign: string;
    cpf: number;
    rg: string;
    father: string;
    mother: string;
    email: string;
    cep: string;
    address: string;
    number: string;
    district: string;
    city: string;
    phone: number;
    height: string;
    weight: string;
    blood: BloodEnum;
    color: string;
    
}