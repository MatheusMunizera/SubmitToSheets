import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/validator/ValidatorField';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;


  constructor(private formBuilder: FormBuilder, private viacepService : ViacepService) {}

  ngOnInit(): void {
    this.validation();
  }

  get f(): any {
    return this.form.controls;
  }
  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: [
        ValidatorField.MustMach('password', 'confirmPassword'),
        ValidatorField.LessThanToday('birthdate'),
        ValidatorField.OverSixTeen('birthdate'),
        ValidatorField.MuchYearsOld('birthdate'),
        ValidatorField.OverSixTeenAge('age'),
        ValidatorField.MuchYearsOldAge('age'),
        ValidatorField.ValidCPF('cpf'),
        ValidatorField.SignNotExists('sign'),
        ValidatorField.MustBeStrong('password')
        
      ],
    };
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        birthdate: ['', Validators.required],
        age: ['', Validators.required],
        cpf: ['', Validators.required],
        rg: ['', Validators.required],
        gender: ['', Validators.required, Validators.maxLength(1)],
        sign: ['', Validators.required],
        father: ['', Validators.required],
        mother: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
        cep: ['', Validators.required,[this.viacepService.validateCEPInput()]] ,
        address: ['', Validators.required],
        number: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        province: ['', Validators.required],
        phone: ['', Validators.required],
        cellphone: ['', Validators.required],
        height: ['', Validators.required],
        weight: ['', Validators.required],
        blood: ['', Validators.required],
        color: ['', Validators.required],
      },
      formOptions
    );
  }

  submitToSheets() {
    const formObj = this.form.getRawValue();
    console.log(formObj);
  }

  setAge(event : any){
    const date = this.f.birthdate
    if(!date.errors){
      
      const birthdate = new Date(date.value);
      let age = this.getAge(birthdate)
       this.form.controls['age'].setValue(age)

    }else{
      this.form.controls['age'].setValue(null)
    }
  }
  getAge(birthdate : Date) {
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() -1 < birthdate.getDate())) {
        age--;
    }
    return age;

  }
}
