import { BloodEnum } from './enum/blood.enum';
import { GenderEnum } from './enum/gender.enum';
import { formatDate } from '@angular/common' 

export class PersonViewModel {
  name?: string;
  birthdate: Date | string;
  age?: number;
  gender?: string;
  sign?: string;
  cpf?: number;
  rg?: string;
  father?: string;
  mother?: string;
  email?: string;
  cep?: string;
  address?: string;
  number?: string;
  district?: string;
  city?: string;
  phone?: number;
  height?: string;
  weight?: string;
  blood?: BloodEnum;
  color?: string;

/**
 *
 */
constructor(person: PersonViewModel) {
  this.name = person.name;
  this.birthdate = person.birthdate;
  this.age = person.age;
  this.gender = person.gender;
  this.sign = person.sign;
  this.cpf = person.cpf;
  this.rg = person.rg;
  this.father = person.father;
  this.mother = person.mother;
  this.email = person.email;
  this.cep = person.cep;
  this.address = person.address;
  this.number = person.number;
  this.district = person.district;
  this.city = person.city;
  this.phone = person.phone;
  this.height = person.height;
  this.weight = person.weight;
  this.blood = person.blood;
  this.color = person.color;
  this.setGenderAsGenderEnum();
  this.formatBirthdate();
  
  
}
   private setGenderAsGenderEnum() {
    switch (this.gender) {
      case 'Masculino':
        this.gender = GenderEnum.MALE;
        break;
      case 'Feminino':
        this.gender = GenderEnum.FEMALE;
        break;

      default:
        this.gender = GenderEnum.OTHERS;
        break;
    }
  }

  private formatBirthdate(){
    this.birthdate = formatDate(this.birthdate, 'yyyy-MM-dd', 'en-US');
  }


}
