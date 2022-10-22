import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, empty, switchMap, tap } from 'rxjs';
import { ValidatorField } from 'src/app/helpers/validator/ValidatorField';
import { ViacepService } from 'src/app/services/viacep.service';
import { AddressViewModel } from 'src/app/view-models/address.view-model';
import { SheetsService } from '../../services/sheets.service';
import { FormsViewModel } from '../../view-models/forms.view-model';
import { ToastrService } from 'ngx-toastr';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private viacepService: ViacepService,
    private sheetsService: SheetsService,
    private toastr: ToastrService
  ) {}

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
        ValidatorField.MustBeStrong('password'),
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
        cep: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        phone: ['', Validators.required],
        height: ['', Validators.required],
        weight: ['', Validators.required],
        blood: ['', Validators.required],
        color: ['', Validators.required],
      },
      formOptions
    );
    this.CEPValidator();
  }

  CEPValidator() {
    this.form
      .get('cep')
      ?.statusChanges.pipe(
        distinctUntilChanged(),
        switchMap((status) =>
          status === 'VALID'
            ? this.viacepService.queryCEP(this.form.get('cep')?.value)
            : empty()
        )
      )
      .subscribe((dados) => (dados ? this.AutoCompleteCEP(dados) : {}));
  }

  AutoCompleteCEP(dados: AddressViewModel) {
    this.form.patchValue({
      address: dados.logradouro,
      district: dados.bairro,
      city: dados.localidade,
    });
  }

  submitToSheets() {
    if(this.form.invalid){
      this.toastr.error('YOU NEED TO INSERT ALL FIELDS CORRECTLY', 'ERROR' );
      return;
    }

      const formObj = this.form.getRawValue();
      this.sheetsService.writeOnSheet(formObj as FormsViewModel)
    .subscribe(res => {
        if( res.statusCode == HttpStatusCode.Created)
        this.toastr.success('ROW ADDED', 'SUCCESS' );
         else
        this.toastr.error('CANT ADD ROW TO SHEETS, TRY AGAIN!', 'ERROR' );
    })

  }
       
  setAge(event: any) {
    const date = this.f.birthdate;
    if (!date.errors) {
      const birthdate = new Date(date.value);
      let age = this.getAge(birthdate);
      this.form.controls['age'].setValue(age);
    } else {
      this.form.controls['age'].setValue(null);
    }
  }
  getAge(birthdate: Date) {
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() - 1 < birthdate.getDate())) {
      age--;
    }
    return age;
  }

  getData(){

    this.toastr.warning('FEATURE NOT IMPLEMENTED', 'GENERATE DATA' );
  }
}
